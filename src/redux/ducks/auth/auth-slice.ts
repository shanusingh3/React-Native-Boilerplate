/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import AuthThunk from './auth-thunk';

const initialState = {
  isLogin: false,
  authToken: '',
  isLoading: true,
};
const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: async (builder) => {
    builder
      .addCase(AuthThunk.logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AuthThunk.logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.isLogin = false;
        state.authToken = '';
      })
      .addCase(AuthThunk.logOut.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default AuthSlice;
