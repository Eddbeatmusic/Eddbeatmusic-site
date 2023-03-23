import React from 'react';
import { useRouter } from 'next/router';
import { Box, Link, Typography } from '@mui/material';

import background from 'assets/video/1. ALTA CALIDAD BAJO PESO.mp4';

const LetsTalk = () => {
  const router = useRouter();
  return (
    <Box position="relative" width="100%">
      <video autoPlay loop muted width="100%">
        <source src={background} type="video/mp4" />
      </video>
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="white"
        maxWidth="60rem"
        textAlign="center"
        top="50%"
        left="50%"
        sx={{ transform: 'translate(-50%, -50%)' }}
      >
        <Typography variant="h1">
          I’ve been working remotely since before it was cool
        </Typography>
        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '173.783px',
            height: '116.7278px',
            borderRadius: '50%',
            border: '1px solid white',
            marginTop: '4rem',
            ':hover': {
              '& .MuiTypography-root': { color: 'black' },
              '& .background': { width: '173.783px', height: '116.7278px' },
            },
          }}
          onClick={() => {
            router.push('/contact');
          }}
        >
          <Box
            className="background"
            sx={{
              position: 'absolute',
              width: 0,
              height: 0,
              backgroundImage: 'linear-gradient(white, white)',
              transition: '0.5s',
              zIndex: -1,
              borderRadius: '50%',
            }}
          ></Box>
          <Typography
            variant="subtitle5"
            color="white"
            sx={{ textTransform: 'uppercase', transition: 'color 0.5s' }}
          >
            Lets Talk
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LetsTalk;
