import { Box, Container, Typography } from '@mui/material';
import React from 'react';

type TBodyProps = { title: string };

export default function Body(props: TBodyProps): React.ReactElement {
  return (
    <Container>
      <Box>
        <Typography variant="h1">{props.title}</Typography>
      </Box>
    </Container>
  );
}
