import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import AddIcon from 'assets/img/AddIcon.svg';
import RemoveIcon from 'assets/img/RemoveIcon.svg';

import Image from 'next/image';

const CollapsibleItem = ({ item, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      className="collapsible-item"
      paddingY={6}
      sx={{
        borderBottom: open && '0.13em solid rgba(0, 0, 0, 1) !important',
        cursor: 'pointer',
      }}
      onClick={() => handleClick()}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
      >
        <Grid container alignItems="baseline">
          <Grid item xs={5} paddingRight={2}>
            <Typography
              variant="h5"
              color="secondary"
              sx={{
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              {item.column1}
            </Typography>
          </Grid>
          <Grid item xs={4} paddingRight={4}>
            <Typography
              variant="subtitle4"
              color="secondary"
              sx={{
                textTransform: 'uppercase',
                display: 'block',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
              }}
            >
              Skills
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="subtitle4"
              color="secondary"
              sx={{
                textTransform: 'uppercase',
                display: 'block',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
              }}
            >
              Software
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={1}
            justifyContent="flex-end"
            alignItems="center"
          >
            {open ? (
              <Image src={RemoveIcon} alt="Collapse" />
            ) : (
              <Image src={AddIcon} alt="Expand" />
            )}
          </Grid>
        </Grid>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ paddingTop: 2 }}>
        <Grid container>
          <Grid item xs={5} paddingRight={2}>
            <Typography
              variant="subtitle4"
              color="secondary"
              sx={{
                textTransform: 'uppercase',
                display: 'block',
                whiteSpace: 'pre-wrap',
              }}
            >
              {item.info1}
            </Typography>
          </Grid>
          <Grid item xs={4} paddingRight={4}>
            <Typography
              variant="subtitle4"
              color="secondary"
              sx={{
                textTransform: 'uppercase',
                display: 'block',
                whiteSpace: 'pre-wrap',
              }}
            >
              {item.skills}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="subtitle4"
              color="secondary"
              sx={{
                textTransform: 'uppercase',
                display: 'block',
                whiteSpace: 'pre-wrap',
              }}
            >
              {item.software}
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};

CollapsibleItem.propTypes = {
  item: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
};

export default CollapsibleItem;
