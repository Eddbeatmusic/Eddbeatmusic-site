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
        alignItems={"stretch"}
      >
        <Grid item xs={1}/>
        <Grid item xs={5} display="flex" justifyContent="end" style={{marginRight: 0}}>
          <Typography
            marginTop={10}
            variant="h2"
            color="white"
            fontSize="5.8rem"
            lineHeight={1.2}
            letterSpacing="18px"
            sx={{
              textAlign: 'right',
              marginBlockEnd: "0px",
              textAlignLast: 'right'
            }}
          >
            INSPIRED
          </Typography>
        </Grid>
        <Grid item xs={6}/>
        <Grid item xs={1}/>
        <Grid item xs={5}>
          <Grid container justifyContent="center">
            <Grid item xs={10} sx={{ height: '100%', cursor: 'pointer', marginTop: 6 }}>
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
                  <div className="lp-disc2"></div>
                  <Typography
                    sx={{ marginY: '45%', textDecoration: 'underline', zIndex: 50, position:'relative' }}
                    variant="subtitle2"
                    fontSize="1.25rem"
                    color="primary"
                    align="center"
                    onClick={() => {
                      router.push('/work');
                    }}
                  >
                    VIEW ALL MUSIC
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={6}>
          <Grid item display="flex" flexWrap={"wrap"} >
            <Typography
              variant="h2"
              color="white"
              fontSize="5.8rem"
              lineHeight={1.2}
              letterSpacing="18px"
              
            >
              WITH
            </Typography>
            <Typography
              variant="h2"
              color="white"
              fontSize="5.8rem"
              lineHeight={1.2}
              letterSpacing="18px"
            >
              MY WORK?
            </Typography>
            <Box display="block" alignSelf={"flex-end"}>
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
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
      <Box width="100vw" bgcolor={"#000"}>
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
