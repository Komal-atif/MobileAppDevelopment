import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
// Optional: SafeAreaView fix
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
