import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { ActionBox } from '@/components/ActionBox';
import { SearchBox } from '@/components/SearchBox';

export function List(): React.ReactElement {
  return (
    <Box style={{ borderStyle: 'dashed', borderColor: 'blue' }}>
      <Grid
        container
        direction="row"
        justifyContent="first-start"
        alignItems="stretch"
        style={{ borderStyle: 'dashed', borderColor: 'blue' }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          md={6}
          style={{ borderStyle: 'dashed', borderColor: 'blue' }}
        >
          <SearchBox />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          md={6}
          style={{ borderStyle: 'dashed', borderColor: 'blue' }}
        >
          <ActionBox />
        </Grid>
      </Grid>
      <Typography variant="h2">List Contents</Typography>
    </Box>
  );
}
