import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type TLink = { to: string; text: string };
type TLinks = Array<TLink>;
type TTabBarProps = { links: TLinks };

export function Tabbar(props: TTabBarProps) {
  const [tabIndex, setTabIndex] = useState(-1);
  return (
    <Tabs
      sx={{ marginRight: 'auto' }}
      textColor="inherit"
      value={tabIndex}
      indicatorColor="secondary"
      onChange={(_event, value) => setTabIndex(value as number)}>
      {props.links.map((element, index) => (
        <Tab key={index} component={Link} to={element.to} label={element.text} color="inherit" />
      ))}
    </Tabs>
  );
}
