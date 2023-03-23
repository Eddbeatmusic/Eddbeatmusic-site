import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import ImageOnHover from 'components/elements/ImageOnHover';
import DragGallery from 'components/elements/DragGallery';
import DropDownTable from 'components/elements/DropDownTable';
import LetsTalk from 'components/modules/LetsTalk';

import DragList from 'constants/DragGalleryObject';
import DropDown from 'constants/ServiceTable';

import arrow from 'assets/img/ArrowReel-01.svg';
import Image from 'next/image';

const Services = () => {
  const bottomRef = useRef(null);

  const handleScroll = (event) => {
    const rect = bottomRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (event.deltaY > 0) {
      if (!isVisible) {
        console.log('not visible');
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Grid
        container
        id="services"
        justifyContent="center"
        alignItems="center"
        alignContent="space-between"
        height="89vh"
        marginBottom="10rem"
        style={{ backgroundColor: 'black' }}
        onWheel={handleScroll}
      >
        <Grid item xs="auto" marginTop="35vh">
          <ImageOnHover images={DragList.map((obj) => obj.imageSrc)}>
            <Typography
              variant="h1"
              color="white"
              letterSpacing="25px"
              sx={{ fontSize: '6.4rem' }}
            >
              SERVICES
            </Typography>
          </ImageOnHover>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'end'}>
          <Box width="13rem" marginRight="25vw">
            <Typography variant="subtitle5" color="white">
              Creativity is at the core of everything
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          textAlign="center"
          display="flex"
          justifyContent="center"
          marginBottom="2rem"
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
        </Grid>
      </Grid>
      <Box ref={bottomRef} sx={{ backgroundColor: 'white' }}>
        <DragGallery images={DragList} />
      </Box>
      <Grid
        container
        justifyContent="center"
        paddingBottom="10rem"
        bgcolor="white"
      >
        <Grid item xs={10} paddingBottom={4}>
          <DropDownTable rows={DropDown} />
        </Grid>
      </Grid>
      <LetsTalk />
    </>
  );
};

export default Services;
