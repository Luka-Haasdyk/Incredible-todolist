import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import TodoList from '../components/ToDoList';
import TodoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';


function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
        <SafeAreaView style={styles.container}>
        <TodoList tasks={tasks} />
        <TodoForm addTask={addTask} />
        <View style={styles.buttonContainer}>
            <Button
            title="Go to About Screen"
            onPress={() => navigation.navigate('About')}
            color={"#ff7f50"}
            />
        </View>
        </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    backgroundColor: '#f0f8ff', 
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '40%', 
    alignSelf: 'center', 
    borderRadius: 10,  
  },
});

export default HomeScreen;
