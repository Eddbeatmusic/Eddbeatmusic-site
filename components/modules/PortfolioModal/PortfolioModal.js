import { useEffect, useState, useRef } from 'react';
import LazyLoad from 'react-lazyload';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import PortfolioWrapper from 'components/elements/PorftofiloWrapper';
import Playlist from 'components/modules/Playlist';
import TopBarIcons from 'components/modules/TopBar/constants/TopBarIcons';
import Carousel from 'components/modules/Carousel';
import ArrowLink from 'assets/img/ArrowLink-black.svg';
import arrow from 'assets/img/ArrowReel-01.svg';
import ArrowWhite from 'assets/img/ArrowLink-01.svg';
import { useProjectContext } from 'context/ModalContext';

const PortfolioModal = ({ project, open, handleClose, carouselImages }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const { setProject } = useProjectContext();
  const videoRef = useRef(null);

  const handleStopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = (index) => {
    handleStopVideo();
    setProject(index);
    handleClose();
  };

  return (
    project && (
      <PortfolioWrapper open={open} handleClose={handleClose}>
        <Box
          onMouseEnter={() => setShowControls(true)}
          sx={{
            position: 'relative',
            maxHeight: '100vh',
            height: '100vh',
            backgroundColor: '#000',
            position: 'relative',
          }}
        >
          <LazyLoad once>
            <video
              ref={videoRef}
              autoPlay
              controls={showControls}
              width="100%"
              height="90%"
              onEnded={() => setVideoFinished(true)}
              style={{ position: 'absolute' }}
            >
              <source src={project.short} type="video/mp4" />
            </video>
          </LazyLoad>
          <Box
            width="100%"
            position="absolute"
            textAlign="center"
            justifyContent="center"
            bottom={30}
            display={'flex'}
          >
            <Typography variant="subtitle4" color="white">
              SCROLL
            </Typography>
            <Box marginX="2rem">
              <Image src={arrow} alt="arrow" />
            </Box>
            <Typography variant="subtitle4" color="white">
              FOR MORE
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={4} sx={{ marginY: '6vw', paddingX: '4vw' }}>
          <Grid item xs={12} sx={{ paddingY: '8vw' }}>
            <Box display="flex" justifyContent="center">
              <Typography variant="subtitle1">{project.quote}</Typography>
            </Box>
          </Grid>
          <Grid item xs={5} paddingTop={9}>
            {project?.firstSection?.left?.map((obj, i) => {
              if (obj.title.toLowerCase().includes('view')) {
                return (
                  <Link
                    key={i}
                    href={obj.link}
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                  >
                    <Box
                      display="flex-inline"
                      position="absolute"
                      paddingBottom={4}
                    >
                      <Typography
                        variant="subtitle4"
                        color="secondary"
                        sx={{
                          textDecoration: 'underline',
                          textUnderlineOffset: '0.3em',
                          textTransform: 'Upper',
                        }}
                      >
                        {obj.title}
                      </Typography>
                      <Image
                        src={ArrowLink}
                        alt="arrow"
                        translate="-50%"
                        style={{ transform: 'translate(-1em, 0px)' }}
                      />
                    </Box>
                  </Link>
                );
              } else {
                return (
                  <Box key={i} display="flex-inline" paddingBottom={4}>
                    <Typography
                      variant="h5"
                      sx={{ textTransform: 'uppercase', paddingBottom: '1vw' }}
                    >
                      {obj.title}
                    </Typography>
                    <Typography variant="subtitle5">{obj.text}</Typography>
                  </Box>
                );
              }
            })}
          </Grid>
          <Grid item xs={7} marginBottom={4}>
            {project?.firstSection?.right?.map((obj, i) => (
              <Box key={i} sx={{ paddingBottom: '5vw' }}>
                <Typography
                  variant="subtitle2"
                  sx={{ textDecoration: 'underline', paddingBottom: '2vw' }}
                >
                  {obj.title}
                </Typography>
                <Typography variant="subtitle2">{obj.text}</Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} sx={{ marginY: '13vw' }}>
            <Playlist playlist={project.playlist} />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: '10vw' }}>
            <Box display="flex" justifyContent="center">
              <Typography sx={{ lineHeight: '144pt', fontSize: '7.5vw' }}>
                {project.secondSection.title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={5} paddingTop={9}>
            <Box display="flex-inline" paddingBottom={4}>
              <Typography
                variant="subtitle2"
                sx={{
                  textTransform: 'uppercase',
                  textDecoration: 'underline',
                  paddingBottom: '1vw',
                }}
              >
                {project.secondSection.subtitle}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7} paddingTop={9}>
            <Box display="flex-inline" paddingBottom={4}>
              <Typography variant="subtitle2">
                {project.secondSection.text}
              </Typography>
            </Box>
          </Grid>
          <Box
            sx={{
              width: '120%',
              height: '2px',
              backgroundColor: 'rgba(0,0,0,0.3)',
              marginTop: '6vw',
              marginBottom: '10vw',
            }}
          ></Box>
          <Grid item xs={4}>
            <Box display="flex-inline" paddingBottom={4}>
              <Typography variant="h3">CREDITS:</Typography>
            </Box>
          </Grid>
          <Grid item container xs={8} sx={{ marginBottom: '8vw' }}>
            {project?.credits?.map((obj, i) => (
              <Grid
                key={i}
                item
                xs={6}
                sx={{ paddingBottom: '5vw', paddingTop: '0.5vw' }}
              >
                <Typography
                  variant="subtitle4"
                  sx={{ paddingBottom: '2vw', paddingRight: '3vw' }}
                >
                  {obj.title}
                </Typography>
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
                  {obj.by}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ marginBottom: '4vw' }}>
          <Grid item xs={5} sx={{ textAlign: 'center' }}>
            <Typography
              variant="subtitle4"
              sx={{ textAlign: 'center', color: 'rgba(0,0,0,0.4)' }}
            >
              Thanks for checking out this project. <br /> You can follow my
              latest work on:
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ marginBottom: '2vw' }}>
          {TopBarIcons?.map((item, i) => {
            return (
              <Grid item key={i}>
                <Link href={item.path} target="_blank">
                  <Box
                    className="modal-Icons"
                    alt={item.title}
                    //height={activeItem === item.title ? "50px" : "70px"}
                    src={item.grayIcon}
                    sx={{
                      backgroundImage: `url(${item.grayIcon.src})`,
                      marginX: '2vw',
                    }}
                    onMouseEnter={() => {
                      setActiveItem(item.title);
                    }}
                    onMouseLeave={() => {
                      setActiveItem(null);
                    }}
                  ></Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{ marginBottom: '4vw', marginTop: '8vw' }}
        >
          <Grid item sx={{ textAlign: 'center' }}>
            <Typography
              variant="subtitle5"
              sx={{ textAlign: 'center', color: 'rgba(0,0,0,0.4)' }}
            >
              COPYRIGHT ©2022 Eduardo Hincapie <br /> All rights reserved
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ backgroundColor: '#000' }}
          justifyContent="center"
        >
          <Grid
            item
            sx={{
              cursor: 'pointer',
              position: 'relative',
              height: '5vw',
              marginTop: '4vw',
            }}
            xs={12}
          >
            <a
              onClick={() => {
                handleClose();
              }}
              style={{ textDecoration: 'none' }}
            >
              <Box
                display="flex-inline"
                position="absolute"
                top={0}
                left={'50%'}
                marginLeft="1rem"
                sx={{ transform: 'translate(-50%, -50%)' }}
              >
                <Typography
                  variant="subtitle4"
                  color="white"
                  sx={{
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.3em',
                  }}
                >
                  VIEW ALL PROJECTS
                </Typography>
                <Image
                  src={ArrowWhite}
                  alt="arrow"
                  translate="-50%"
                  style={{ transform: 'translate(-1em, 0px)' }}
                />
              </Box>
            </a>
          </Grid>
          <Grid item sx={{ padding: '1vw' }} xs={12}>
            <Carousel
              CarouselListGallery={carouselImages}
              handleClick={(index) => handleClick(index)}
            />
          </Grid>
        </Grid>
      </PortfolioWrapper>
    )
  );
};

export default PortfolioModal;
