import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

import { Sidebar } from '@/components/Sidebar';
import { Tabbar } from '@/components/Tabbar';

type TLink = { to: string; text: string };
type TLinks = Array<TLink>;
type THeaderProps = { title: string; links: TLinks };

export function Header(props: THeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          {isMobile ? (
            <Sidebar links={props.links} />
          ) : (
            <Tabbar links={props.links} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
