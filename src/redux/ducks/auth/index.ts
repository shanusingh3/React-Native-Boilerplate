import slice from './auth-slice';
import selectors from './auth-selector';
import thunks from './auth-thunk';

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
