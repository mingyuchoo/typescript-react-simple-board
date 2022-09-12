import React from 'react';

import { Body } from '@/layouts/Body';

export function Index(): React.ReactElement {
  const title = 'Page Not Found';
  return (
    <Body title={title}>
      <div></div>
    </Body>
  );
}
