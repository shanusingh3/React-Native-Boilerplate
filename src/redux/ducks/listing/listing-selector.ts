/* eslint-disable react-hooks/rules-of-hooks */
import { RootState } from '@app/redux/store/store';
import { useSelector } from 'react-redux';

const getPropertyList = (): any => {
  const _data = useSelector((state: RootState) => state.listing.list);
  return _data;
};

const ListingSelector = {
  getPropertyList,
};

export default ListingSelector;
