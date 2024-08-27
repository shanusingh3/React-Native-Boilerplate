import React, { useEffect, useRef } from 'react';
import { Appearance, BackHandler, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import '@locale/localeConfig';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import { navigationRef } from '@app/navigation/navigation-service';
import { ErrorBoundary, Loader, OfflineBar, toastConfig } from '@components';
import { persistor, store } from '@app/redux/store/store';
import { darkTheme, lightTheme } from '@theme/theme';
import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
} from 'react-native-permissions';
import AppConatiner from '@app/navigation/app-container';
const BACK_BUTTON_TO_EXIT_DELAY = 2000;

function App(): React.JSX.Element {
  const routeNameRef = useRef<string | undefined>('');
  const exitApp = useRef(false);

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
