import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AppBar, Box, Grid, Link } from '@mui/material';

import SymbolLogo1 from 'assets/img/EddBeatLogo-01.svg';
import SymbolLogo2 from 'assets/img/EddBeatLogo-02.svg';
import Selected from 'assets/img/SeleccionPaginaBanner-01.svg';
import TopBarMenu from './constants/TopBarMenu';
import TopBarIcons from './constants/TopBarIcons';

const TopBar = () => {
  const router = useRouter();
  const [onIcon, setOnIcon] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(document.getElementById('__next').scrollTop);
    };

    handleScroll();

    document.getElementById('__next').addEventListener('scroll', handleScroll);
    return () => {
      document
        .getElementById('__next')
        .removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#000000',
        height: scrollY === 0 ? '104px' : '72px',
        transition: 'height 1s ease',
        justifyContent: 'center',
        borderBottom: 'solid 1px white',
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Box
            display="flex"
            justifyContent="start"
            alignItems="end"
            marginBottom={1}
          >
            {TopBarMenu.map((item, i) => {
              return (
                <Grid
                  container
                  key={i}
                  flexDirection="column"
                  alignItems="center"
                >
                  <Grid item minHeight={'19px'}>
                    <div
                      hidden={
                        activeItem === item.title ||
                        router.pathname === item.path
                          ? ''
                          : 'hidden'
                      }
                    >
                      <Image key={i} src={Selected} alt="selected" />
                    </div>
                  </Grid>
                  <Grid item>
                    <Link
                      href={item.path}
                      underline="none"
                      color={
                        activeItem === item.title ||
                        router.pathname === item.path
                          ? '#FFFFFF'
                          : '#696969'
                      }
                      fontFamily="Hebden Grotesque"
                      fontSize={'10.79pt'}
                      marginX={2}
                      key={i}
                      onMouseEnter={() => {
                        setActiveItem(item.title);
                      }}
                      onMouseLeave={() => {
                        setActiveItem(null);
                      }}
                    >
                      {item.title}
                    </Link>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Link href="/">
              <Image
                src={onIcon ? SymbolLogo2 : SymbolLogo1}
                alt="Symbol"
                onMouseEnter={() => {
                  setOnIcon(true);
                }}
                onMouseLeave={() => {
                  setOnIcon(false);
                }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box marginRight={6}>
            <Grid container spacing={4} justifyContent="end">
              {TopBarIcons.map((item, i) => {
                return (
                  <Grid item key={i}>
                    <Link href={item.path} target="_blank">
                      <Image
                        alt={item.title}
                        src={
                          activeItem === item.title
                            ? item.whiteIcon
                            : item.grayIcon
                        }
                        onMouseEnter={() => {
                          setActiveItem(item.title);
                        }}
                        onMouseLeave={() => {
                          setActiveItem(null);
                        }}
                      />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TopBar;
