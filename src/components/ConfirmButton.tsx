import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

export function ConfirmButton() {
  const [title, setTitle] = useState('Delete');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle('Delete');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handler = () => {
    if (title == 'Delete') {
      setTitle('Confirm to delete');
    } else if (title == 'Confirm to delete') {
      setTitle('Confirmed');
    }
  };

  return <Button onClick={handler}>{title}</Button>;
}
