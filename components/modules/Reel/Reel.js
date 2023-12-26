import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

import background from 'assets/Portfolio/MainReelTiny.mp4';
import arrow from 'assets/img/ArrowReel-01.svg';

const Reel = () => {
  const [videoClicked, setVideoClicked] = useState(false);

  const handleClick = useCallback(async () => {
    setVideoClicked((v) => !v);
    if (!videoClicked) {
      document.getElementById('reel').currentTime = 0;
      document.getElementById('reel').pause();
    }
  }, [videoClicked]);

  return (
    <Box className="reelContainer" onClick={handleClick}>
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
        maxWidth="60rem"
        textAlign="start"
        top="50%"
        left="50%"
        sx={{ transform: 'translate(-90%, -50%)' }}
        display={videoClicked ? 'none' : 'block'}
      >
        <Typography variant="h1">Bringing projects to</Typography>
        <Typography variant="h1">
          life trought{' '}
          <span
            style={{
              fontStyle: 'italic',
              textDecoration: 'underline',
              fontFamily: 'Andale Mono',
              letterSpacing: 0,
            }}
          >
            Music Concept
          </span>
        </Typography>
      </Box>
      <Box
        width="100%"
        position="absolute"
        textAlign="center"
        justifyContent="center"
        bottom={50}
        display={videoClicked ? 'none' : 'flex'}
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
  );
};

export default Reel;
