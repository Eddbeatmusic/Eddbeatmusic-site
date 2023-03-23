import { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Image from 'next/image';
import { useRouter } from 'next/router';

import FooterMenu from './constants/FooterMenu';
import FooterSocial from './constants/FooterSocial';

const Footer = () => {
  const theme = useTheme();
  const { push, pathname } = useRouter();
  const clipboardRef = useRef(null);
  const [activeClipBoard, setActiveClipBoard] = useState(false);
  const [mousePos, setMousePos] = useState({});

  const logo = require('assets/img/SymbolLogo-01.svg');

  const handleClipBoard = () => {
    navigator.clipboard.writeText('eddbeatmusic.contact@gmail.com');
    setActiveClipBoard(true);
  };

  const handleMouseDown = (e) => {
    setMousePos({ x: e.clientX });
  };

  useEffect(() => {
    activeClipBoard &&
      setTimeout(() => {
        setActiveClipBoard(false);
      }, 2000);
  }, [activeClipBoard]);

  return (
    <Box bgcolor="#000" position='relative'>
      <Grid container sx={{ paddingBottom: 6 }}>
        {FooterMenu.map((item, i) => {
          return (
            <Grid
              item
              xs={12}
              sx={{
                borderBottom: '1px solid white',
                paddingLeft: '8%',
                cursor: pathname === item.path ? 'regular' : 'pointer',
              }}
              className={
                pathname === item.path ? 'active-footer' : 'footer-title'
              }
              key={i}
              onClick={() => {
                window.location.href=item.path
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  color={theme.palette.primary.main}
                  sx={{ pr: 5, textTransform: 'uppercase' }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '173.783px',
                    height: '116.7278px',
                    borderRadius: '50%',
                    border: '1px solid black',
                  }}
                >
                  <Typography
                    variant="subtitle5"
                    color={pathname === item.path ? theme.palette.primary.main : theme.palette.secondary.main}
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {pathname === item.path ? 'YOU ARE HERE' : item.sub}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
        <Grid
          item
          container
          xs={12}
          sx={{ paddingTop: 6 }}
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Grid item xs={12} md={6} sx={{ paddingLeft: '7%' }}>
            <Link href="/">
              <Image src={logo} alt="Eduardo's Logo" width="160vw" />
            </Link>
          </Grid>
          <Grid item container xs={12} md={6}>
            <Grid item xs={7}>
              <Typography variant="subtitle4" color={theme.palette.primary.main}>
                Drop me a line
              </Typography>
              <Typography
                color={theme.palette.primary.main}
                sx={{ overflowWrap: 'break-word', paddingTop: 2 }}
                variant="h6"
                id="contact-footer"
                ref={clipboardRef}
                onClick={() => handleClipBoard()}
                onMouseDown={(e) => handleMouseDown(e)}
              >
                <span>Eddbeatmusic</span>
                <br />
                <span>.contact@gmail.com</span>
              </Typography>
            </Grid>
            <Grid item xs={5}>
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
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: 6 }}>
              <Typography
                variant="subtitle4"
                sx={{ color: 'rgba(255, 255, 255, 0.16)' }}
              >
                &copy; 2022 Eduardo Hincapie - All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {activeClipBoard && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '173.783px',
            height: '116.7278px',
            borderRadius: '50%',
            border: '1px solid white',
            textAlign: 'center',
            position: 'absolute',
            top:
              clipboardRef.current &&
              clipboardRef.current.offsetTop + 'px',
            left: mousePos.x + 'px',
            zIndex: '90',
            backgroundColor: theme.palette.secondary.main,
          }}
          className={activeClipBoard ? 'clip-board' : ''}
        >
          <Typography
            variant="subtitle5"
            color={theme.palette.primary.main}
            sx={{ textTransform: 'uppercase' }}
          >
            Copied to ClipBoard
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
