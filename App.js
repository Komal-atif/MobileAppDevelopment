import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './frontend/navigation/TabNavigator';
import { CartProvider } from './frontend/context/CartContext';
import { WishlistProvider } from './frontend/context/WishlistContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <WishlistProvider>
        <CartProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </CartProvider>
      </WishlistProvider>
    </SafeAreaProvider>
  );
}
