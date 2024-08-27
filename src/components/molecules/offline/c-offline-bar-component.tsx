import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { theme } from '@theme/theme';

const OfflineBar = () => {
  const animationConstants = useMemo(
    () => ({
      DURATION: 800,
      TO_VALUE: 4,
      INPUT_RANGE: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
      OUTPUT_RANGE: [0, -15, 0, 15, 0, -15, 0, 15, 0],
    }),
    [],
  );

  const [connected, setConnected] = useState(true);
  const animation = useRef(new Animated.Value(0)).current;

  const triggerAnimation = useCallback(() => {
    animation.setValue(0);
    Animated.timing(animation, {
      duration: animationConstants.DURATION,
      toValue: animationConstants.TO_VALUE,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }, [animation, animationConstants]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const { isConnected } = state;
      setConnected(isConnected);
      if (isConnected) {
        triggerAnimation();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [triggerAnimation]);

  const interpolated = animation.interpolate({
    inputRange: animationConstants.INPUT_RANGE,
    outputRange: animationConstants.OUTPUT_RANGE,
  });
  const animationStyle = {
    transform: [{ translateX: interpolated }],
  };

  return !connected ? (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={theme.colors.deepPurple} />
      <Animated.Text style={[styles.offlineText, animationStyle]}>
        No Internet Connection.
      </Animated.Text>
    </SafeAreaView>
  ) : null;
};

export default OfflineBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.deepPurple,
    paddingTop: 16,
  },
  offlineText: {
    color: '#fff',
    padding: 8,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
});
