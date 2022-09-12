import React from 'react';

import { Index as Blog } from '@/features/blog';
import { Index as Body } from '@/layouts/body';

export function Index(): React.ReactElement {
  const title = 'Blog';
  return (
    <Body title={title}>
      <Blog />
    </Body>
  );
}
