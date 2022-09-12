import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type TLink = { to: string; text: string };
type TLinks = Array<TLink>;
type TSideBarProps = { links: TLinks };

export function Index(props: TSideBarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {props.links.map((element, index) => (
            <ListItem
              key={index}
              component={Link}
              to={element.to}
              onClick={() => setOpen(!open)}
            >
              <ListItemIcon>
                <ListItemText color="inherit">{element.text}</ListItemText>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'white', margineLeft: 'auto' }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
