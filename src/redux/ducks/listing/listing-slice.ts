/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import ListingThunk from './listing-thunk';

const initialState = {
  list: [],
};
const Listinglice = createSlice({
  name: 'listing',
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(ListingThunk.getPropertyList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});
export default Listinglice;
