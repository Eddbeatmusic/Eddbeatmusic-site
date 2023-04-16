import React from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const LP = () => {
  const router = useRouter();

  return (
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
      <Grid item xs={2} paddingTop="8%" className="left-text">
        <Typography
          variant="subtitle2"
          color="primary"
          align="right"
          className="text-left-underscore"
        >
          VIEW
        </Typography>
      </Grid>
      <Grid item xs={8} sx={{ position: 'relative' }}>
        <div className="lp-disc"></div>
        <Typography
          sx={{ marginY: '55%' }}
          variant="subtitle2"
          color="primary"
          align="center"
          className="text-center-underscore"
        >
          ALL
        </Typography>
      </Grid>
      <Grid item xs={2} paddingTop="67%" className="right-text">
        <Typography
          variant="subtitle2"
          color="primary"
          align="left"
          className="text-right-underscore"
        >
          MUSIC
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LP;
