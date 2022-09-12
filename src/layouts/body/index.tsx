import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

type TBodyProps = { title: string };

export default function Body(props: TBodyProps): React.ReactElement {
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
          <Typography variant="body1">Contents</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
