import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import {
  decrease,
  increase,
  increaseAsync,
  increaseByAmount,
  increaseIfOdd,
  selectCount,
} from '@/slices/counter';
import { useAppDispatch, useAppSelector } from '@/store';

export default function Counter(): React.ReactElement {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [increaseAmount, setIncrementAmount] = useState('2');

  const increaseValue = Number(increaseAmount) || 0;

  return (
    <Container>
      <Box>
        <Button onClick={() => dispatch(decrease())}>-</Button>
        <Typography>{count}</Typography>
        <Button onClick={() => dispatch(increase())}>+</Button>
      </Box>
      <Box>
        <TextField
          value={increaseAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(increaseByAmount(increaseValue))}>
          Add Amount
        </Button>
        <Button onClick={() => void dispatch(increaseAsync(increaseValue))}>
          Add Async
        </Button>
        <Button onClick={() => dispatch(increaseIfOdd(increaseValue))}>
          Add If Odd
        </Button>
      </Box>
    </Container>
  );
}
