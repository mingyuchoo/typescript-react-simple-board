import { Typography } from '@mui/material';
import React from 'react';

import { Index as Body } from '@/layouts/body';

export function Index(): React.ReactElement {
  const title = 'Home';
  return (
    <Body title={title}>
      <Typography variant="h2">Sub title</Typography>
    </Body>
  );
}
