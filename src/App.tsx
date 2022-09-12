import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Index as Footer } from '@/layouts/footer';
import { Index as Header } from '@/layouts/header';

type TLink = { to: string; text: string };
type TLinks = Array<TLink>;

const links: TLinks = [
  { to: '/home', text: 'Home' },
  { to: '/board', text: 'Board' },
  { to: '/counter', text: 'Counter' },
  { to: '/blog', text: 'Blog' },
  { to: '/about-us', text: 'About Us' },
  { to: '/signin', text: 'Signin' },
  { to: '/signup', text: 'Signup' },
];

export default function App(): React.ReactElement {
  const title = 'TypeScript React Simple Board';
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item xs={12}>
        <Header title={title} links={links} />
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
