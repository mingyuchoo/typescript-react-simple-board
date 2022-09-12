import React from 'react';

import { Body } from '@/layouts/Body';
import { List } from '@/routes/counter/List';

export function Index(): React.ReactElement {
  const title = 'Counter';
  return (
    <Body title={title}>
      <List />
    </Body>
  );
}
