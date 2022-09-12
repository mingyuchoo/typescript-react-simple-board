import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

type TBodyProps = { title: string; children: React.ReactElement };

export function Index(props: TBodyProps): React.ReactElement {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h1">{props.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          {props.children ? props.children : <>Contents</>}
        </Grid>
      </Grid>
    </Container>
  );
}
