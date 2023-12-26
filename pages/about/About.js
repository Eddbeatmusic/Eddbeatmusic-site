import React from 'react';
import { Box, Grid, Link, List, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';

import LP from 'components/elements/LP';
import LetsTalk from 'components/modules/LetsTalk';
import Parallax from 'components/modules/Parallax';
import ImageOnHover from 'components/elements/ImageOnHover';

import picture2 from 'assets/pictures/3.png';
import stamp from 'assets/img/Eduar_Stamp.svg';

import ExperienceImage from 'constants/ExperienceObject';
import AchievementImage from 'constants/AchievementObject';
import FooterSocial from 'components/modules/Footer/constants/FooterSocial';

const About = () => {
  return (
    <>
      <Parallax />
      <Box
        style={{
          background: 'black',
        }}
      >
        <Typography
          variant="subtitle1"
          color="white"
          marginX="22vw"
          textAlign="center"
          marginBottom="5rem"
        >
          My goal is always to make outstanding sounds and original soundtracks
          that will help amplify the narrative and experience of your project.
        </Typography>
        <Grid container>
          <Grid item xs={6} display="flex" justifyContent="center">
            <Box marginX="5rem" position="relative">
              <Image src={picture2} alt="about" />
              <Box
                position="absolute"
                left="50%"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <Image src={stamp} alt="stamp" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Box marginBottom="2rem" marginRight="5rem">
                <Typography variant="subtitle4" color="white">
                  After graduating as a music composer, Eduardo has focused his
                  career into the creation, production and implementation of
                  music and sound design that will help enhance the narrative
                  and experience in videogames and visual media.
                </Typography>
              </Box>
              <Box marginRight="5rem">
                <Typography variant="subtitle4" color="white">
                  Currently based in Colombia, he did his academic internship at
                  the Victoria University of Wellington. He also did studies in
                  composition and implementation of music and sound for
                  videogames at the U.N.A. Argentina. All this in order to
                  improve his capabilities as a composer and properly create and
                  implement music for videogames and visual media.
                </Typography>
              </Box>
            </Box>
            <Box width="35rem">
              <Typography
                variant="subtitle4"
                color="white"
                fontStyle="italic"
                style={{ textDecoration: 'underline' }}
              >
                I’m Available for freelance work, collaborations and workshops.
              </Typography>
            </Box>
            <Box width="19rem">
              <Typography variant="h3" color="white" lineHeight={1}>
                See more of my work
              </Typography>
            </Box>
            <Box>
              <Stack spacing={2}>
                {FooterSocial.map((item, i) => (
                  <Link
                    key={i}
                    variant="subtitle4"
                    underline="none"
                    href={item.href}
                    target="_blank"
                  >
                    <Box
                      component="span"
                      className="footer-social"
                      sx={{ marginBottom: '0.07em', paddingRight: '7px' }}
                    >
                      {item.title}
                    </Box>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop="10rem">
          <Grid item xs={6}>
            <Box marginLeft="5rem">
              <ImageOnHover images={ExperienceImage.map((obj) => obj.imageSrc)}>
                <Typography color="white" variant="h2">
                  EXPERIENCE
                </Typography>
                <Typography color="white" variant="subtitle2">
                  (2017 - Present)
                </Typography>
              </ImageOnHover>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box marginRight="5rem">
              <Typography variant="subtitle4" color="white">
                He started making music as freelance composer for independent
                short films, visual media projects and videogames since 2016
                while he was starting his studies in music composition. From
                then, he started participating in different Game Jams through
                the years, making music and sound design for indie games.
              </Typography>
            </Box>
            <Box marginRight="5rem" marginTop="2rem">
              <Typography variant="subtitle4" color="white">
                On 2022 he gave a conference about Music for films and
                videogames at EAFIT university and has been making music for
                independent videogame studios and clients for publicity purposes
                of their projects as well as specific jobs in order to help them
                shape their projects into something more real and entertaining
                through music and sound design.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop="10rem">
          <Grid item xs={6}>
            <Box marginLeft="5rem">
              <ImageOnHover
                images={AchievementImage.map((obj) => obj.imageSrc)}
              >
                <Typography color="white" variant="h2">
                  ACHIEVEMENTS
                </Typography>
              </ImageOnHover>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box marginRight="5rem">
              <ul className="achievement-list">
                <li className="achievement-list-item">
                  <Typography variant="subtitle4" color="white">
                    Two times finalist in the contest *New Talents in Arts* by
                    the Chamber of Commerce of Medellín for Antioquia.
                  </Typography>
                </li>
                <li className="achievement-list-item">
                  <Typography variant="subtitle4" color="white">
                    Composer for the investigation group of music & technology,
                    MUSUX. Which was awarded an artistic scholarship in 2018.
                  </Typography>
                </li>
                <li className="achievement-list-item">
                  <Typography variant="subtitle4" color="white">
                    Accepted at the Victoria University of Wellington to carry
                    out his academic internship 2020.
                  </Typography>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Box bgcolor="#000">
          <Grid container justifyContent="center" marginY="30vh">
            <Grid item xs={3} sx={{ height: '100%' }}>
              <LP />
            </Grid>
          </Grid>
        </Box>
        <LetsTalk />
      </Box>
    </>
  );
};

export default About;
