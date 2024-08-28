import slice from './listing-slice';
import selectors from './listing-selector';
import thunks from './listing-thunk';

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
