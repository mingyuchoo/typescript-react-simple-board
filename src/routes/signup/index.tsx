import React from 'react';

import { Body } from '@/layouts/Body';
import { List } from '@/routes/signup/List';

export function Index(): React.ReactElement {
  const title = 'Sign up';
  return (
    <Body title={title}>
      <List />
    </Body>
  );
}
