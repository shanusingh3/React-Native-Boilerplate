//Import Thunks
import AuthThunk from './ducks/auth/auth-thunk';
import LoaderThunk from './ducks/loader/loder-thunk';
//Import Selectors
import AuthSelector from './ducks/auth/auth-selector';
import LoaderSelector from './ducks/loader/loader-selector';
//others
import { dispatch } from './store/store';

export { AuthThunk, LoaderThunk, AuthSelector, LoaderSelector, dispatch };
