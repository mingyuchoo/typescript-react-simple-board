import React from 'react';

import { Index as Counter } from '@/features/counter';
import { Index as Body } from '@/layouts/body';

export function Index(): React.ReactElement {
  const title = 'Counter';
  return (
    <Body title={title}>
      <Counter />
    </Body>
  );
}
