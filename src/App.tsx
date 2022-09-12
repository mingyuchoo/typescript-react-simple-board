import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/layouts/header';

type TLink = { to: string; text: string };
type TLinks = Array<TLink>;

const links: TLinks = [
  { to: '/home', text: 'Home' },
  { to: '/board', text: 'Board' },
  { to: '/counter', text: 'Counter' },
  { to: '/blog', text: 'Blog' },
  { to: '/about-us', text: 'About Us' },
  { to: '/login', text: 'Login' },
  { to: '/sign-up', text: 'Sign Up' },
];

export default function Home(): React.ReactElement {
  return (
    <Container>
      <Header title="TRSB" links={links} />
      <Outlet />
    </Container>
  );
}
