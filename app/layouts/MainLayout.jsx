import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>My Incredible TODO List App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, 
    padding: 20,
  },
  footer: {
    height: 50, 
    backgroundColor: '#ff7f50', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff', 
    fontSize: 16,
  },
});

export default MainLayout;
