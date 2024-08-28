/* eslint-disable no-unreachable */
import { createAsyncThunk } from '@reduxjs/toolkit';

const setLocation = createAsyncThunk(
  'setLocation',
  async (location: any, { rejectWithValue }) => {
    try {
      return location;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const LocationThunk = {
  setLocation,
};
export default LocationThunk;
