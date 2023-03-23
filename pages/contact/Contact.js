import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Grid, Typography } from '@mui/material';

import picture from 'assets/pictures/4.png';

const Contact = () => {
  const router = useRouter();
  return (
    <>
      <Grid
        container
        paddingBottom="10rem"
        style={{ backgroundColor: 'black' }}
      >
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography
            marginTop={10}
            variant="h1"
            color="white"
            fontSize="6rem"
            lineHeight={1.2}
            letterSpacing="20px"
          >
            INSPIRED
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Grid container justifyContent="center">
            <Grid item xs={6} sx={{ height: '100%' }}>
              <Grid
                container
                sx={{ backgroundColor: '#000' }}
                min-height="20rem"
                min-width="33.5rem"
                className="lp-component"
                onClick={() => {
                  router.push('/work');
                }}
              >
                <Grid item xs={12} sx={{ position: 'relative' }}>
                  <div className="lp-disc"></div>
                  <Typography
                    sx={{ marginY: '55%', textDecoration: 'underline' }}
                    variant="subtitle2"
                    fontSize="1.25rem"
                    color="primary"
                    align="center"
                  >
                    VIEW ALL MUSIC
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item>
              <Typography
                variant="h1"
                color="white"
                fontSize="6rem"
                lineHeight={1.2}
                letterSpacing="20px"
              >
                WITH
              </Typography>
              <Typography
                variant="h1"
                color="white"
                fontSize="6rem"
                lineHeight={1.2}
                letterSpacing="20px"
              >
                MY WORK?
              </Typography>
              <Box marginTop="5rem">
                <Typography variant="h4" color="white" letterSpacing={0}>
                  MAIL ME
                </Typography>
                <Typography variant="subtitle3" color="white" letterSpacing={0}>
                  Eddbeatmusic.contact@gmail.com
                </Typography>
              </Box>
              <Box marginTop="3rem">
                <Typography variant="h4" color="white" letterSpacing={0}>
                  QUICK CHAT
                </Typography>
                <Typography variant="subtitle3" color="white" letterSpacing={0}>
                  Whatsapp (+57) 321 730 2295
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box width="100vw">
        <Image
          src={picture}
          alt="Eduardo laughing looking at a screen"
          objectFit="cover"
        />
      </Box>
    </>
  );
};

export default Contact;
