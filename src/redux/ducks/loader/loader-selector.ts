/* eslint-disable react-hooks/rules-of-hooks */
import { RootState } from '@app/redux/store/store';
import { useSelector } from 'react-redux';

const showLoader = (): any => {
  const show = useSelector((state: RootState) => state.loader.show);
  return show;
};

const LoaderSelector = {
  showLoader,
};

export default LoaderSelector;
