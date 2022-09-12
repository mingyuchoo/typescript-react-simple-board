import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function NotFound(): React.ReactElement {
  return (
    <Container>
      <Box>
        <Typography variant="h1">Page Not Found</Typography>
      </Box>
    </Container>
  );
}
