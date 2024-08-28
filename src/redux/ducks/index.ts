import auth from './auth';
import loader from './loader';
import location from './location';

export default {
  auth: auth.reducer,
  loader: loader.reducer,
  location: location.reducer,
};
