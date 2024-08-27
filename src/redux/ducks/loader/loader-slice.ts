import { createSlice } from '@reduxjs/toolkit';
import LoaderThunk from './loder-thunk';

const initialState = {
  show: false,
  message: '',
};

const LoaderSlice = createSlice({
  name: 'loder',
  initialState,
  reducers: {
    reset: (state) => {
      state.show = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoaderThunk.showLoader.fulfilled, (state) => {
        state.show = true;
      })
      .addCase(LoaderThunk.hideLoader.fulfilled, (state) => {
        state.show = false;
      });
  },
});

export default LoaderSlice;
