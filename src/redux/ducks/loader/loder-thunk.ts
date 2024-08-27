import { createAsyncThunk } from '@reduxjs/toolkit';

const showLoader = createAsyncThunk('showLoader', async () => true);
const hideLoader = createAsyncThunk('hideLoader', async () => false);

const LoaderThunk = {
  showLoader,
  hideLoader,
};

export default LoaderThunk;
