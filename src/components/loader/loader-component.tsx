import React from 'react';
import { Modal, StyleSheet, View, Image } from 'react-native';
import { LoaderImage } from '@assets/images';
import { LoaderSelector } from '@app/redux';

export const Loader = () => {
  const showLoader = LoaderSelector.showLoader();
  if (showLoader) {
    return (
      <Modal visible={showLoader} animationType='fade' transparent={true}>
        <View style={styles.container}>
          <Image
            style={styles.loaderSize}
            source={LoaderImage}
            resizeMode={'contain'}
          />
        </View>
      </Modal>
    );
  }
  return <View />;
};
export default Loader;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderSize: {
    width: '20%',
    height: '20%',
  },
});
