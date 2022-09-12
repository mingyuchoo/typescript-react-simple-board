import React from 'react';

import { Body } from '@/layouts/Body';
import { List } from '@/routes/signin/List';

export function Index(): React.ReactElement {
  const title = 'Sign in';
  return (
    <Body title={title}>
      <List />
    </Body>
  );
}
