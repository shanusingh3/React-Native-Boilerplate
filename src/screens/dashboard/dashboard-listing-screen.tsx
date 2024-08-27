/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { AuthThunk, dispatch } from '@app/redux';
import { Text } from '@components';
import {
  TouchableHighlight,
  View,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { scaler } from '@utils';
import { House1, House2, House3, House4, House5 } from '@assets/images';

const DashboardListingScreen = () => {
  const _data = Array.from({ length: 1000 }, (_, index) => {
    const randomIndex = Math.floor(Math.random() * 5); // Generate a random index between 0 and 4
    const images = [House1, House2, House3, House4, House5];
    const imageUrl = images[randomIndex];

    return {
      id: index + 1,
      title: `Property ${index + 1}`,
      details: 'Details of the props',
      imageUrl,
    };
  });

  const [data, setData] = useState(_data);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    // Simulate initial data fetch
    setData(data.slice(0, 100)); // Load the first 10 items
    setHasNextPage(true);
  }, []);

  const loadMore = () => {
    if (hasNextPage) {
      const startIndex = data.length;
      const endIndex = Math.min(startIndex + 10, data.length + 10);
      setData([...data, ...data.slice(startIndex, endIndex)]);
      setHasNextPage(endIndex < data.length);
      setPage(page + 1);
    }
  };

  const renderItem = ({ item }) => (
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
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={hasNextPage ? () => <Text>Loading...</Text> : null}
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
