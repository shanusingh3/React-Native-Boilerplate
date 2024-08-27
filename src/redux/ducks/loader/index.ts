import slice from './loader-slice';
import selectors from './loader-selector';
import thunks from './loder-thunk';

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
