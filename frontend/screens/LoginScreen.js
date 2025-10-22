import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Inputs */}
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.or}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#DB4437' }]}>
          <Icon name="google" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4267B2' }]}>
          <Icon name="facebook" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]}>
          <Icon name="twitter" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.link}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
