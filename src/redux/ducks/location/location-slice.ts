/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import LocationThunk from './location-thunk';

const initialState = {
  location: undefined,
};
const Locationlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(LocationThunk.setLocation.fulfilled, (state, action) => {
      state.location = action.payload;
    });
  },
});
export default Locationlice;
