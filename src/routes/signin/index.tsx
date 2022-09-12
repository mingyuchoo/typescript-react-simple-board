import React from 'react';

import { Index as Signin } from '@/features/signin';
import { Index as Body } from '@/layouts/body';

export function Index(): React.ReactElement {
  const title = 'Sign in';
  return (
    <Body title={title}>
      <Signin />
    </Body>
  );
}
