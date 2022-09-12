import React from 'react';

import { Index as Body } from '@/layouts/body';

export function Index(): React.ReactElement {
  const title = 'Page Not Found';
  return (
    <Body title={title}>
      <div></div>
    </Body>
  );
}
