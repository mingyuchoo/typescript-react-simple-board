import React from 'react';
import { useParams } from 'react-router-dom';

import { Body } from '@/layouts/Body';
import { Detail } from '@/routes/board/Detail';
import { List } from '@/routes/board/List';

export function Index(): React.ReactElement {
  const title = 'Board';
  const { id } = useParams();
  return <Body title={title}>{id ? <Detail id={id} /> : <List />}</Body>;
}

export * from '@/routes/board/Detail';
