import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator'; 
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
