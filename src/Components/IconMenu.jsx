import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" color='black'>
        <MenuIcon/>
      </IconButton>
    </Stack>
  );
}