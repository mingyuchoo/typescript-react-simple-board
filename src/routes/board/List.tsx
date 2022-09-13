import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import { ActionBox } from '@/components/ActionBox';
import { SearchBox } from '@/components/SearchBox';

export function List(): React.ReactElement {
  return (
    <Container style={{ borderStyle: 'dashed', borderColor: 'blue' }}>
      <Box style={{ borderStyle: 'dashed', borderColor: 'blue' }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          style={{ borderStyle: 'dashed', borderColor: 'blue' }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            item
            xs={12}
            style={{ borderStyle: 'dashed', borderColor: 'blue' }}
          >
            <SearchBox />
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            item
            xs={12}
            style={{ borderStyle: 'dashed', borderColor: 'blue' }}
          >
            <ActionBox />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="h2">List Contents</Typography>
      </Box>
    </Container>
  );
}
