import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';

import Board from '@/features/board';
import Counter from '@/features/counter';

type Data = {
  span: string;
  url: string;
  text: string;
};

export default function App(): React.ReactElement {
  return (
    <Container>
      <Box>
        <Board />
        <Counter />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/mingyuchoo">
        https://github.com/mingyuchoo
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
