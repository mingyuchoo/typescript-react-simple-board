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
    <div style={{ borderStyle: 'dashed', borderColor: 'blue' }}>
      <div>
        <button onClick={() => dispatch(decrease())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increase())}>+</button>
      </div>
      <div>
        <input
          value={increaseAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(increaseByAmount(increaseValue))}>
          Add Amount
        </button>
        <button onClick={() => void dispatch(increaseAsync(increaseValue))}>
          Add Async
        </button>
        <button onClick={() => dispatch(increaseIfOdd(increaseValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
}
