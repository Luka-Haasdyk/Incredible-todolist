import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
        <View style={styles.container}>
        <Text style={styles.appName}>Incredible ToDo List</Text>
        <Text style={styles.name}> Luka Haasdyk </Text>
        <Text style={styles.date}>{currentDate}</Text>
        <View style={styles.buttonContainer}>
            <Button
            title="Go to Home Screen"
            onPress={() => navigation.navigate('Home')}
            color={"#ff7f50"}
            />
        </View>
        </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', 
    padding: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '40%', 
    borderRadius: 10, 
  },
});

export default AboutScreen;
