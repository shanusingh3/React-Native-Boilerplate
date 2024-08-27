import React from 'react';
import { StyleSheet, View } from 'react-native';
import { deviceHeight } from '@utils/dimension-utils';
import scaler from '@utils/scaler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import Text from '@components/atoms/text/c-text-component';

interface InetworkInterface {
  refreshNetworkPress?: () => void;
}
const NoNetworkModule = (props: InetworkInterface) => {
  const { t } = useTranslation();
  const { refreshNetworkPress } = props;
  return (
    <View style={styles.container}>
      <Text variant='bodyMedium1'>{t('common:networkEmptyMsg')}</Text>
      <TouchableOpacity onPress={() => refreshNetworkPress}>
        <Text variant='bodyMedium1' style={styles.btnStyle}>
          Try again!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: scaler(20),
  },
  btnStyle: {
    color: 'red',
    marginTop: scaler(20),
  },
});

export default NoNetworkModule;
