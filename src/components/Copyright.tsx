import { Link, Typography } from '@mui/material';
import React from 'react';

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/mingyuchoo">
        https://github.com/mingyuchoo
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
