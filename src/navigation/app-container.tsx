import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Splash, Dashboard, PropertyDetails } from '@screens';
import { ROUTES } from '@constants';

const AuthNav = createStackNavigator();
const AuthStack = () => (
  <AuthNav.Navigator
    initialRouteName={ROUTES.Login}
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthNav.Screen name={ROUTES.Splash} component={Splash} />
    <AuthNav.Screen name={ROUTES.Login} component={Login} />
  </AuthNav.Navigator>
);

const DashboardNav = createStackNavigator();
const DashboardStack = () => (
  <DashboardNav.Navigator
    initialRouteName={ROUTES.Dashboard}
    screenOptions={{
      headerShown: false,
    }}
  >
    <DashboardNav.Screen name={ROUTES.Dashboard} component={Dashboard} />
    <DashboardNav.Screen
      name={ROUTES.PropertyDetails}
      component={PropertyDetails}
    />
  </DashboardNav.Navigator>
);

const AppStack = createStackNavigator();
function AppConatiner(): React.JSX.Element {
  useEffect(() => {}, []);

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name={ROUTES.Splash} component={Splash} />
      <AppStack.Screen name={ROUTES.AuthStack} component={AuthStack} />
      <AppStack.Screen
        name={ROUTES.DashboardStack}
        component={DashboardStack}
      />
    </AppStack.Navigator>
  );
}

export default AppConatiner;
