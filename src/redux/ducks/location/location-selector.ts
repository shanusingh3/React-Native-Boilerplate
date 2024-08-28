/* eslint-disable react-hooks/rules-of-hooks */
import { RootState } from '@app/redux/store/store';
import { useSelector } from 'react-redux';

const getUpdatedLocation = (): any => {
  const _location = useSelector((state: RootState) => state.location.location);
  return _location;
};

const LocationSelector = {
  getUpdatedLocation,
};

export default LocationSelector;
