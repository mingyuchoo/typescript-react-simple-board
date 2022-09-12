import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/layouts/header';

export default function Home(): React.ReactElement {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
