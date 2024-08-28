import slice from './location-slice';
import selectors from './location-selector';
import thunks from './location-thunk';

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
