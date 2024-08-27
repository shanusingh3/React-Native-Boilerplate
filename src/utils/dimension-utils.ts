import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const updateDimensions = (callback) => {
  const handleDimensionsChange = () => {
    callback({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  };

  const subscription = Dimensions.addEventListener(
    'change',
    handleDimensionsChange,
  );
  handleDimensionsChange();
  return subscription;
};
