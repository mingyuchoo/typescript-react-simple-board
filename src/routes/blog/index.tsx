import React from 'react';
import { useParams } from 'react-router-dom';

import { Body } from '@/layouts/Body';
import { Detail } from '@/routes/blog/Detail';
import { List } from '@/routes/blog/List';

export function Index(): React.ReactElement {
  const title = 'Blog';
  const { id } = useParams();
  return <Body title={title}>{id ? <Detail id={id} /> : <List />}</Body>;
}
