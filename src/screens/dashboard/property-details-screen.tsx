/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { scaler } from '@utils';
import { Button, Text } from '@components';
import { t } from 'i18next';
import { withUserLocation } from '@hoc';
import { showSuccessToast } from '@utils/toast-utils';

interface Property {
  imageUrl: string;
  title: string;
  details: string;
  desciption: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface Props {
  route: {
    params: {
      item: Property;
    };
  };
  isValidToUnlock: boolean;
}

const PropertyDetailsScreen: React.FC<Props> = (props) => {
  const { route, isValidToUnlock } = props;
  const { item } = route.params;

  const handleUnlock = useCallback(() => {
    showSuccessToast('Door Unlocked.')
  }, [])

  return (
    <View style={styles.container}>
      <Image source={item.imageUrl} style={styles.image} />
      <Text fontSize={scaler(18)} mt={8}>
        {item.title}
      </Text>
      <Text variant='placeholder' mt={8}>{item.desciption}</Text>
      <Text mt={8}>Address: {item.details}</Text>
      {isValidToUnlock ? (
        <Button
          title={t('property:unlockCTA')}
          onPress={() => handleUnlock(item.lat, item.lng)} // Pass latitude and longitude to handleUnlock
          style={styles.btnStyle}
        />
      ) : (
        <Text>You are not authorized to unlock this property.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    marginTop: scaler(45),
  },
  container: { flex: 1, padding: scaler(20) },
  image: { width: '100%', height: scaler(200), borderRadius: scaler(5) },
});

export default withUserLocation(PropertyDetailsScreen);
