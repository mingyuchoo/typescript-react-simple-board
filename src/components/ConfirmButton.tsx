import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

enum Stage {
  ONE,
  TWO,
  THREE,
}
export function ConfirmButton() {
  const [title, setTitle] = useState('Delete');
  const [stage, setStage] = useState(Stage.ONE);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle('Delete');
      setStage(Stage.ONE);
    }, 1500);
    return () => clearTimeout(timer);
  }, [title, stage]);

  const handler = () => {
    if (title == 'Delete') {
      setTitle('Confirm to delete');
      setStage(Stage.TWO);
    } else if (title == 'Confirm to delete') {
      setTitle('Confirmed');
      setStage(Stage.THREE);
    }
  };

  return <Button onClick={handler}>{title}</Button>;
}
