import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

type TBodyProps = { title: string; children: React.ReactElement };

export function Body(props: TBodyProps): React.ReactElement {
  return (
    <Box>
      <Grid container direction="column" justifyContent="first-start" alignItems="stretch">
        <Grid item xs={12}>
          <Typography variant="h1">{props.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          {props.children ? props.children : <>Contents</>}
        </Grid>
      </Grid>
    </Box>
  );
}
