import {
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
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

export function List(): React.ReactElement {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [increaseAmount, setIncrementAmount] = useState('2');

  const increaseValue = Number(increaseAmount) || 0;

  const [snackState, setSnackState] = React.useState(false);
  const handleSnackClose = () => {
    setSnackState(false);
  };

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
        <Button
          onClick={() => {
            void dispatch(increaseAsync(increaseValue));
            setSnackState(true);
          }}
        >
          Add Async
        </Button>
        <Button onClick={() => dispatch(increaseIfOdd(increaseValue))}>
          Add If Odd
        </Button>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={handleSnackClose}
        open={snackState}
        message="Loaded"
      />
    </Container>
  );
}
