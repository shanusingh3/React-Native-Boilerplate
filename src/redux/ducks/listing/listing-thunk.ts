/* eslint-disable no-unreachable */
import { House1, House2, House3, House4, House5 } from '@assets/images';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getPropertyList = createAsyncThunk(
  'getPropertyList',
  async (_, { rejectWithValue }) => {
    try {
      const _data = Array.from({ length: 1000 }, (_, index) => {
        const randomIndex = Math.floor(Math.random() * 5); // Generate a random index between 0 and 4
        const images = [House1, House2, House3, House4, House5];
        const imageUrl = images[randomIndex];
        // Ensure at least one item has a location within a specific range (e.g., Bengaluru)
        let latitude;
        let longitude;
    
        if (index === 0) {
          latitude = 37.785834;
          longitude = -122.406417;
        } else {
          latitude = Math.random() * 0.2 + 12.89;
          longitude = Math.random() * 0.2 + 77.55;
        }
    
        return {
          id: index + 1,
          title: `Property ${index + 1}`,
          details: 'No. 123, 4th Cross,5th Main,Indiranagar,Bengaluru, Karnataka - 560038',
          desciption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          imageUrl,
          location: {
            latitude,
            longitude,
          },
        };
      });
      return _data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const ListingThunk = {
  getPropertyList,
};
export default ListingThunk;
