import auth from './auth';
import listing from './listing';
import loader from './loader';
import location from './location';

export default {
  auth: auth.reducer,
  loader: loader.reducer,
  location: location.reducer,
  listing: listing.reducer,
};
