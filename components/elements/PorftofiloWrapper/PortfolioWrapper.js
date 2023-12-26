import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import CloseIcon from 'assets/img/close_icon.svg';

export default function MaxWidthDialog({
  open = false,
  handleClose,
  ...props
}) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
        scroll="body"
      >
        <Box
          sx={{
            cursor: 'pointer',
            zIndex: 90,
            position: 'fixed',
            top: { sm: '2vw', md: '3vw' },
            right: { sm: '2vw', md: '3vw' },
            borderRadius: '50%',
            width: { sm: '7vw', md: '6vw' },
            height: { sm: '7vw', md: '6vw' },
          }}
          onClick={handleClose}
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={CloseIcon}
            alt="Close Icon"
          />
        </Box>
        <DialogContent>
          <Box
            margin={0}
            padding={0}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              overflowX: 'hidden',
              color: '#000',
            }}
          >
            {props.children}
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
