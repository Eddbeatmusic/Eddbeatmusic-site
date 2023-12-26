import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

import Image from 'next/image';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography } from '@mui/material';

import play from 'assets/img/Play.svg';
import pause from 'assets/img/Pause.svg';

const LazyLoadImageListItem = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <LazyLoad once style={{ display: props.appear ? 'block' : 'none' }}>
      <ImageListItem
        {...props}
        onLoad={handleLoad}
        style={{
          ...props.style,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {props.children}
      </ImageListItem>
    </LazyLoad>
  );
};

const ImageDisplay = ({ images, filteredText = 'all', handleSelection }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const [selected, setSelected] = useState('');
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    audio?.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio?.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  useEffect(() => {
    audio?.addEventListener('timeupdate', () => setCurrent(audio?.currentTime));
    return () => {
      audio?.removeEventListener('timeupdate', () => setCurrent(0));
    };
  }, [audio]);

  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
  }, [playing, audio]);

  const togglePlay = async (item) => {
    if (selected === item.title) {
      setPlaying(!playing);
    } else if (playing) {
      await setPlaying(false);
      setSelected(item.title);
      setAudio(new Audio(item.audio));
      setPlaying(true);
    } else {
      setSelected(item.title);
      setAudio(new Audio(item.audio));
      setPlaying(true);
    }
  };

  const handleClick = (index) => {
    handleSelection(index);
  };

  return (
    <ImageList
      sx={{ height: '100%', overflowX: 'hidden' }}
      cols={matches ? 3 : 2}
      gap={8}
    >
      {images &&
        images.map(({ index, item }) => (
          <LazyLoadImageListItem
            key={index}
            appear={
              item.category.toLowerCase().includes(filteredText) ||
              filteredText === 'all'
            }
            style={{ cursor: 'pointer', height: '100%' }}
            position="relative"
            onMouseEnter={() => setActiveElement(item.title)}
            onMouseLeave={() => setActiveElement(null)}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClick(index);
            }}
          >
            <Box height="27vw" width="27vw" sx={{ position: 'relative' }}>
              <Image
                layout="fill"
                objectFit="cover"
                src={item.src}
                alt={item.altText}
                loading="lazy"
                style={{
                  filter:
                    activeElement === item.title || selected === item.title
                      ? 'grayscale(100)'
                      : 'none',
                }}
              />
            </Box>
            <Box
              width="100%"
              height="100%"
              position="absolute"
              bottom="0%"
              textAlign="center"
              flexDirection="column"
              flexWrap="wrap"
              alignContent="center"
              alignItems="center"
              justifyContent="center"
              display={
                activeElement === item.title || selected === item.title
                  ? 'flex'
                  : 'none'
              }
            >
              <Box
                height="5vw"
                width="5vw"
                padding="10px"
                borderRadius="50%"
                display="inline-block"
                border="solid white 0.2vw"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay(item);
                }}
                style={{
                  backgroundColor: 'white',
                  backgroundImage:
                    selected === item.title
                      ? `conic-gradient(#444444 ${
                          (current * 100) / audio?.duration
                        }%, white ${(current * 100) / audio?.duration}% ${
                          ((audio?.duration - current) * 100) / audio?.duration
                        }%)`
                      : 'none',
                }}
              >
                <Grid
                  container
                  height="100%"
                  width="100%"
                  borderRadius="50%"
                  bgcolor="white"
                  alignContent="center"
                  justifyContent="center"
                >
                  <Grid item xs={3}></Grid>
                  <Grid
                    item
                    xs={selected === item.title ? 6 : 7}
                    display="flex"
                    justifyContent="center"
                  >
                    <Image
                      src={(selected === item.title) & playing ? pause : play}
                      alt={
                        (selected === item.title) & playing ? 'pause' : 'play'
                      }
                      height="40%"
                      width="40%"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={(selected === item.title) & playing ? 3 : 2}
                  ></Grid>
                </Grid>
              </Box>
              <Typography variant="h6" color="white" marginTop="2vh">
                {item.title}
              </Typography>
              <Typography
                variant="subtitle5"
                color="white"
                sx={{ textTransform: 'uppercase' }}
                marginTop="2vh"
              >
                {item.category}
              </Typography>
            </Box>
          </LazyLoadImageListItem>
        ))}
    </ImageList>
  );
};

export default ImageDisplay;
