import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCount } from '@/apis/counter';
import { AppThunk, RootState } from '@/store';

export interface CounterState {
  value: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  loading: 'idle',
};

export const increaseAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount);
  return response.data;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(increaseAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(increaseAsync.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increase, decrease, increaseByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export const increaseIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(increaseByAmount(amount));
    }
  };

export default counterSlice.reducer;
