import { Typography } from '@mui/material';
import React from 'react';

import { ConfirmButton } from '@/components/ConfirmButton';
import { Body } from '@/layouts/Body';

export function Index(): React.ReactElement {
  const title = 'Home';
  return (
    <Body title={title}>
      <>
        <Typography variant="h2">Contents</Typography>
        <ConfirmButton />
      </>
    </Body>
  );
}
