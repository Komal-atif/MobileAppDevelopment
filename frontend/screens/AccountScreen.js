

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Top Half */}
      <View style={styles.topHalf}>
        <Text style={styles.logo}>KFITS</Text>
      </View>

      {/* Bottom Half */}
      <View style={styles.bottomHalf}>
        <Text style={styles.welcome}>Welcome!</Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  topHalf: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  logo: {
    fontSize: 50,
    fontWeight: '800',
    color: '#b8860b',
    letterSpacing: 6,
  },
  bottomHalf: {
    flex: 0.6,
    backgroundColor: 'rgba(184, 134, 11, 0.15)', 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 22,
    justifyContent: 'flex-start',
  },
  welcome: {
    fontSize: 18,
    color: '#746f6f',
    fontWeight: '500',
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 110,
    left: 30,
    right: 30,
  },
  loginButton: {
    backgroundColor: '#fff',
    flex: 0.48,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#fff',
    flex: 0.48,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { 
    color: '#b8860b', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});
