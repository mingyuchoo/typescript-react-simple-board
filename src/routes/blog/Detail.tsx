import { Box, Container, Typography } from '@mui/material';
import React from 'react';

type TDetailProps = { id: string };
export function Detail(props: TDetailProps): React.ReactElement {
  return (
    <Container>
      <Box>
        <Typography variant="h2">
          Post No. {props.id} Detail Contents
        </Typography>
      </Box>
    </Container>
  );
}
