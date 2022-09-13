import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

type TBodyProps = { title: string; children: React.ReactElement };

export function Body(props: TBodyProps): React.ReactElement {
  return (
    <Container style={{ borderStyle: 'dashed', borderColor: 'black' }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ borderStyle: 'dashed', borderColor: 'black' }}
      >
        <Grid
          item
          xs={12}
          style={{ borderStyle: 'dashed', borderColor: 'black' }}
        >
          <Typography variant="h1">{props.title}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ borderStyle: 'dashed', borderColor: 'black' }}
        >
          {props.children ? props.children : <>Contents</>}
        </Grid>
      </Grid>
    </Container>
  );
}
