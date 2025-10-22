import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/SignUpScreenStyles'; 

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Create a New Account</Text>

      {/* Input Fields */}
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Sign Up */}
      <Text style={styles.or}>Or sign up with</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#DB4437' }]}>
          <Icon name="google" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4267B2' }]}>
          <Icon name="facebook" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]}>
          <Icon name="twitter" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.link}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
