import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import { selectCount } from '@/slices/counter';
import { useAppSelector } from '@/store';

export default function Board(): React.ReactElement {
  const count = useAppSelector(selectCount);

  return (
    <Container>
      <Box>
        <Typography variant="body1">{count}</Typography>
      </Box>
    </Container>
  );
}
