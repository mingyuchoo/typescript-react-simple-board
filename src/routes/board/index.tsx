import React from 'react';

import { Index as Board } from '@/features/board';
import { Index as Body } from '@/layouts/body';

export function Index(): React.ReactElement {
  const title = 'Board';
  return (
    <Body title={title}>
      <Board />
    </Body>
  );
}
