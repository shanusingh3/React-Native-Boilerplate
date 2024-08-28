/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { AuthThunk, dispatch } from '@app/redux';
import { Text } from '@components';
import {
  TouchableHighlight,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { scaler } from '@utils';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@constants';
import ListingSelector from '@app/redux/ducks/listing/listing-selector';
import ListingThunk from '@app/redux/ducks/listing/listing-thunk';

const DashboardListingScreen = () => {
  const navigation = useNavigation();
  const _data = ListingSelector.getPropertyList();
  useEffect(() => {
    //TODO: Pending Pagination
    //Pagination Logic start from here, initally fetch first page
    dispatch(ListingThunk.getPropertyList());
  }, []);

  const loadMore = () => {};

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTES.PropertyDetails, { item: item })
      }
    >
      <View style={{ marginBottom: scaler(10), padding: 10 }}>
        <View style={{ backgroundColor: '#f2f2f2', borderRadius: scaler(5) }}>
          <Image
            source={item.imageUrl}
            style={{
              width: '100%',
              height: scaler(150),
              borderRadius: scaler(5),
            }}
          />
        </View>
        <View style={{ padding: scaler(10) }}>
          <Text>{item.title}</Text>
          <Text numberOfLines={2} ellipsizeMode='tail'>
            {item.details}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text fontSize={scaler(18)}>Dashboard</Text>
        <TouchableHighlight onPress={() => dispatch(AuthThunk.logOut())}>
          <Text variant='label'>Logout</Text>
        </TouchableHighlight>
      </View>
      <FlatList
        data={_data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default DashboardListingScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    padding: scaler(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
  },
  flatListContainer: { paddingTop: scaler(20), paddingBottom: scaler(20) },
});
