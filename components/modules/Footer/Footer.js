import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FooterMenu from './constants/FooterMenu';

const Footer = () => {
  const { pathname } = useRouter()

  const logo = require('assets/img/SymbolLogo-01.svg');

  const handleClipBoard = () => {
    navigator.clipboard.writeText('eddbeatmusic.contact@gmail.com');

  }

  return (
    <Box bgcolor="#000">
      <Grid container sx={{paddingBottom: 6}}>
        {FooterMenu.map((item, i) => {
          return <Grid item xs={12} sx={{ borderBottom: '1px solid white', paddingLeft: '8%', cursor: 'pointer'}} className='footer-title' key={i}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography variant="h6" color='primary' sx={{ pr: 5,textTransform: 'uppercase' }}>{item.title}</Typography>
              <Box 
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '173.783px', height: '116.7278px', borderRadius: '50%', border: '1px solid black'}}>
                <Typography variant="subtitle5" color='secondary' sx={{ textTransform: 'uppercase' }}>{item.sub}</Typography>
              </Box>
            </Box>
          </Grid> 
        })}
        <Grid item container xs={12} sx={{ paddingTop: 6 }} justifyContent="flex-start" alignItems="flex-end">
          <Grid item xs={12} md={6} sx={{ paddingLeft: '7%'}}>
            <Image src={logo} alt="Eduardo's Logo" height='150%'/>
          </Grid>
          <Grid item container xs={12} md={6}>
            <Grid xs={7}>
              <Typography variant='subtitle4' color='white'>Drop me a line</Typography>
              <Typography
                color='white'
                sx={{ overflowWrap: 'break-word', paddingTop: 2}}
                variant='h6'
                id='contact-footer'
                onClick={() => handleClipBoard()}
              >
                <span>
                  Eddbeatmusic
                </span>
                <br/>
                <span>
                  .contact@gmail.com
                </span>
              </Typography>
            </Grid>
            <Grid xs={5}>
              <Stack spacing={2}>
                <Link
                  variant='subtitle4'
                  underline='none'
                  href='#'
                >
                  <Box 
                    component='span'
                    sx={{ paddingBottom: 0.7, borderBottom: '1px solid white', paddingRight:'7px' }}>
                      Sound Cloud
                  </Box>
                </Link>
                <Link
                  variant='subtitle4'
                  underline='none'
                  href='#'
                >
                  <Box 
                    component='span'
                    sx={{ paddingBottom: 0.7, borderBottom: '1px solid white', paddingRight:'7px' }}>
                      Band Camp
                  </Box>
                </Link>
                <Link
                  variant='subtitle4'
                  underline='none'
                  href='#'
                >
                  <Box 
                    component='span'
                    sx={{ paddingBottom: 0.7, borderBottom: '1px solid white', paddingRight:'7px' }}>
                      Instagram
                  </Box>
                </Link>
                <Link
                  variant='subtitle4'
                  underline='none'
                  href='#'
                >
                  <Box 
                    component='span'
                    sx={{ paddingBottom: 0.7, borderBottom: '1px solid white', paddingRight:'7px' }}>
                      Twitter
                  </Box>
                </Link>
              </Stack>
            </Grid>
            <Grid xs={12} sx={{paddingTop: 6}}>
              <Typography variant='subtitle4' sx={{color: 'rgba(255, 255, 255, 0.16)'}}>&copy; 2022 Eduardo Hincapie - All rights reserved</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )

};

export default Footer