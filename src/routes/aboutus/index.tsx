import React from 'react';

import { Body } from '@/layouts/Body';
import { List } from '@/routes/aboutus/List';

export function Index(): React.ReactElement {
  const title = 'About Us';
  return (
    <Body title={title}>
      <List />
    </Body>
  );
}
