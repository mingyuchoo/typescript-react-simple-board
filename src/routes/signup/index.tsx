import React from 'react';

import { Index as Signup } from '@/features/signup';
import { Index as Body } from '@/layouts/body';

export function Index(): React.ReactElement {
  const title = 'Sign up';
  return (
    <Body title={title}>
      <Signup />
    </Body>
  );
}
