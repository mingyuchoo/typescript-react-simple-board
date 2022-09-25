import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

export function ConfirmButton() {
  const [title, setTitle] = useState('Delete');

  useEffect(() => {
    if (title == 'Confirm to delete') {
      setTimeout(() => {
        setTitle('Delete');
      }, 1500);
    }
  });

  const handler = () => {
    if (title == 'Delete') {
      setTitle('Confirm to delete');
    }
  };

  return <Button onClick={handler}>{title}</Button>;
}
