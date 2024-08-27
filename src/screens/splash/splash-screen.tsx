import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthThunk, dispatch } from '@app/redux';

const Splash = () => {
  useEffect(() => {
    const bootstrap = async () => {
      dispatch(AuthThunk.retrieveToken());
    };
    bootstrap();
  }, []);

  return <View style={styles.container} />;
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
