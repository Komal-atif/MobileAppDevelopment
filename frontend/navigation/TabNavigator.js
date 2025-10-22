import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import WinterScreen from '../screens/WinterScreen';
import SummerScreen from '../screens/SummerScreen';
import PerfumesScreen from '../screens/PerfumesScreen';
import SaleScreen from '../screens/SaleScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/WishlistScreen';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Common header style
const headerOptions = {
  headerStyle: { backgroundColor: '#b8860b' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
};

// Home Stack
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Winter" component={WinterScreen} options={{ title: 'Winter Collection' }} />
      <Stack.Screen name="Summer" component={SummerScreen} options={{ title: 'Summer Collection' }} />
      <Stack.Screen name="Perfumes" component={PerfumesScreen} options={{ title: 'Perfumes' }} />
      <Stack.Screen name="Sale" component={SaleScreen} options={{ title: 'Sale Offers' }} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'Product Details' }} />
    </Stack.Navigator>
  );
}

// Account Stack
function AccountStack() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="AccountMain" component={AccountScreen} options={{ title: 'Account' }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          else if (route.name === 'Wishlist') iconName = 'heart-outline';
          else if (route.name === 'Account') iconName = 'person-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#b8860b',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          backgroundColor: '#fff',
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 25,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          ...Platform.select({ android: { elevation: 8 } }),
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: true,
          title: 'Cart',
          headerStyle: { backgroundColor: '#b8860b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          headerShown: true,
          title: 'Wishlist',
          headerStyle: { backgroundColor: '#b8860b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
}
