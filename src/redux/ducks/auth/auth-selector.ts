/* eslint-disable react-hooks/rules-of-hooks */
import { RootState } from '@app/redux/store/store';
import { useSelector } from 'react-redux';

const isLogin = (): any => {
  const savedUsers = useSelector((state: RootState) => state.auth.isLogin);
  return savedUsers;
};

const AuthSelector = {
  isLogin,
};

export default AuthSelector;
