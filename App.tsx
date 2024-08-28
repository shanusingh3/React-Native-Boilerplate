import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Appearance,
  BackHandler,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import '@locale/localeConfig';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import { navigationRef } from '@app/navigation/navigation-service';
import { ErrorBoundary, Loader, OfflineBar, toastConfig } from '@components';
import { dispatch, persistor, store } from '@app/redux/store/store';
import { darkTheme, lightTheme } from '@theme/theme';
import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
} from 'react-native-permissions';
import AppConatiner from '@app/navigation/app-container';
const BACK_BUTTON_TO_EXIT_DELAY = 2000;
import Geolocation from 'react-native-geolocation-service';
import LocationThunk from '@app/redux/ducks/location/location-thunk';

function App(): React.JSX.Element {
  const routeNameRef = useRef<string | undefined>('');
  const exitApp = useRef(false);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        const status = await Geolocation.requestAuthorization('whenInUse');
        if (status === 'granted') {
          setHasPermission(true);
        } else if (status === 'denied') {
          Alert.alert('Location permission denied');
        } else if (status === 'disabled') {
          Alert.alert(
            'Turn on Location Services in Settings to allow Unlockr to determine your location.',
            '',
            [
              {
                text: 'Go to Settings',
                onPress: () => Linking.openURL('app-settings:'),
              },
            ],
          );
        }
      } else if (Platform.OS === 'android' && Platform.Version >= 23) {
        const status = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (status !== PermissionsAndroid.RESULTS.GRANTED) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
        } else {
          setHasPermission(true);
        }
      } else {
        setHasPermission(true); // Assume permission granted for older Android versions
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    startWatchingLocation();
  }, [hasPermission]);

  const startWatchingLocation = async () => {
    if (!hasPermission) {
      console.warn('Location permission not granted');
      return;
    }

    Geolocation.watchPosition(
      (position) => {
        console.log('user', position);

        dispatch(LocationThunk.setLocation(position));
      },
      (error) => {
        console.error(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    const permissionsToCheck: any = Platform.select({
      android: [
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        PERMISSIONS.ANDROID.READ_CONTACTS,
        ...(Number(Platform.Version) <= 30 // Android 11 and below
          ? [
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            ]
          : []),
      ],
      ios: [
        PERMISSIONS.IOS.CONTACTS,
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.PHOTO_LIBRARY,
      ], // Add iOS permissions if needed
    });
    checkMultiple(permissionsToCheck)
      .then((statuses) => {
        Object.keys(statuses)?.forEach((permission) => {
          const status = statuses[permission];
          if (status === 'denied') {
            requestMultiple(permissionsToCheck);
          }
        });
      })
      .catch((error: any) => {
        console.warn(error);
      });
  });

  useEffect(() => {
    const onBackPress = () => {
      if (!navigationRef?.current?.canGoBack()) {
        setTimeout(() => {
          exitApp.current = false;
        }, BACK_BUTTON_TO_EXIT_DELAY);
        if (!exitApp.current) {
          exitApp.current = true;
        } else {
          BackHandler.exitApp();
        }
        return true;
      }
    };
    const unsubscribe = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );
    return () => {
      unsubscribe?.remove();
    };
  }, []);

  const getTheme = () =>
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              routeNameRef.current =
                navigationRef?.current?.getCurrentRoute()?.name;
            }}
            onStateChange={async () => {
              const previousRouteName = routeNameRef.current;
              const currentRouteName =
                navigationRef?.current?.getCurrentRoute()?.name ?? '';
              if (previousRouteName !== currentRouteName) {
              }
              routeNameRef.current = currentRouteName;
            }}
          >
            <ThemeProvider theme={getTheme()}>
              <OfflineBar />
              <AppConatiner />
              <Loader />
              <Toast config={toastConfig} />
            </ThemeProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
export default App;
