import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React, { useCallback, useState, useEffect } from 'react';

import background from 'assets/Portfolio/MainReelTiny.mp4';
import arrow from 'assets/img/ArrowReel-01.svg';
import reelCursor from 'assets/img/Reel01-01.svg';

const Reel = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [videoClicked, setVideoClicked] = useState(false);

  const variantScroll = isMediumScreen ? 'subtitle4' : 'subtitle5';

  const inStyle = {
    backgroundImage: `url(${reelCursor.src})`,
    height: reelCursor.height,
    width: reelCursor.width,
    zIndex: 90,
    position: 'absolute',
    transform: 'translate(-0%, -50%)',
    boxSizing: 'border-box',
    opacity: 0,
    transitionDuration: "500ms",
    transitionTimingFunction: "ease-out"
  }

  const handleClick = useCallback(async () => {
    const cursor = document.querySelector('.cursor-reel');
    cursor.style.display = "none";
    setVideoClicked((v) => !v);
    if (!videoClicked) {
      document.getElementById('reel').currentTime = 0;
    }
  }, [videoClicked]);

  useEffect(() => {
    const cursor = document.querySelector('.cursor-reel');
    const parent = document.getElementById('reel-cursor');

    const addAttribute = (e) => {
      cursor.style.opacity = 1;
      document
        .getElementById('reel-cursor')
        .addEventListener('mousemove', positionElement);
    };

    const deleteAttribute = (e) => {
      cursor.style.opacity = 0;
      cursor.style.courser = 'auto';
      window.removeEventListener('mousemove', positionElement);
    }

    const positionElement = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      let bounds = parent.getBoundingClientRect();
      const cursorx = mouseX - bounds.left - cursor.offsetWidth / 2;
      const cursory = mouseY - bounds.top + 5;

      if (
        mouseY + cursor.offsetHeight / 2 > bounds.bottom - 5 &&
        cursor.style.opacity == 1
      ) {
        cursor.style.opacity = 0;
      } else if (mouseY < bounds.bottom) {
        cursor.style.opacity = 1;
      }

      cursor.style.left = `${cursorx}px`;
      cursor.style.top = `${cursory}px`;
    };
      document
      .getElementById('reel-cursor')
      .addEventListener('mousemove', positionElement);
    document
      .getElementById('reel-cursor')
      .addEventListener('mouseenter', addAttribute);
    document
      .getElementById('reel-cursor')
      .addEventListener('mouseleave', deleteAttribute);

    return () => {
      window.removeEventListener('mousemove', positionElement);
      window.removeEventListener('mouseenter', addAttribute);
      window.removeEventListener('mouseleave', deleteAttribute);
    };
  }, []); 

  return (
    <Box className="reelContainer"  id="reel-cursor" >
      <div className='cursor-reel' style={inStyle} onClick={handleClick}/>
      <Box
        bgcolor={videoClicked ? '' : 'rgba(0 ,0 ,0, 0.4)'}
        width="100%"
        height="100%"
        position="absolute"
      />
      <video
        id="reel"
        width="100%"
        autoPlay
        loop={!videoClicked}
        muted={!videoClicked}
        controls={videoClicked}
      >
        <source src={background} type="video/mp4" />
      </video>
      <Box
        position="absolute"
        color="white"
        textAlign="center"
        width="100%"
        display={videoClicked ? 'none' : 'flex'}
        justifyContent="center"
        sx={{margin: 'auto', height: {md: '85%', xs: '100%'}}}
      >
        <Typography 
          sx={{
            display: 'block',
            fontFamily: 'Hebden Grotesque',
            fontSize: {md:'6rem', xs: '2.5rem'},
            lineHeight: {md: '70pt', xs: '60pt'},
            letterSpacing: '0.1em',
            margin: 'auto 0'
        }}
        >
          PLAY REEL
        </Typography>
      </Box>
      
      <Box
        width="100%"
        position="absolute"
        textAlign="center"
        justifyContent="center"
        sx={{bottom: {md: 145, xs: 0}, cursor: 'pointer'}}
        display={videoClicked ? 'none' : 'flex'}
      >
        <Typography variant={variantScroll} color="white">
          SCROLL
        </Typography>
        <Box marginX="2rem">
          <Image src={arrow} alt="arrow" />
        </Box>
        <Typography variant={variantScroll} color="white">
          FOR MORE
        </Typography>
      </Box>
    </Box>
  );
};

export default Reel;
