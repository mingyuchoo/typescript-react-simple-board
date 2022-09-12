import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

import SideBar from '@/components/sidebar';
import TabBar from '@/components/tabbar';

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

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TRSB
          </Typography>
          {isMobile ? <SideBar links={links} /> : <TabBar links={links} />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
