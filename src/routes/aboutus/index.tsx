import React from 'react';

import { Index as AboutUs } from '@/features/aboutus';
import { Index as Body } from '@/layouts/body';

export function Index(): React.ReactElement {
  const title = 'About Us';
  return (
    <Body title={title}>
      <AboutUs />
    </Body>
  );
}
