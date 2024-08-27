import Text from '@components/atoms/text/c-text-component';
import scaler from '@utils/scaler';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

interface IErrorLabel {
  error: string;
}

const ErrorLabel = (props: IErrorLabel) => {
  const { error = '' } = props;
  return (
    <Text variant='error' style={styles.text}>
      {error}
    </Text>
  );
};

export default memo(ErrorLabel);

const styles = StyleSheet.create({
  text: {
    padding: scaler(2),
  },
});
