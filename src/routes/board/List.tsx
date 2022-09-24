import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { ActionBox } from '@/components/ActionBox';
import { SearchBox } from '@/components/SearchBox';

export function List(): React.ReactElement {
  return (
    <Box>
      <Grid container direction="row" justifyContent="first-start" alignItems="stretch">
        <Grid container justifyContent="center" alignItems="center" item xs={12} md={6}>
          <SearchBox />
        </Grid>
        <Grid container justifyContent="center" alignItems="center" item xs={12} md={6}>
          <ActionBox />
        </Grid>
      </Grid>
      <Typography variant="h2">List Contents</Typography>
    </Box>
  );
}
