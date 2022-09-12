import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';

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

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function App(): React.ReactElement {
  const title = 'TypeScript React Simple Board';
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
