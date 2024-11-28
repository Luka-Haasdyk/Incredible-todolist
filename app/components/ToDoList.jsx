import React from 'react';
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
} from 'react-native';



function TodoList({ tasks }) {
  return (
    <ScrollView>
        {tasks.map((task, index) => (
            <Pressable key={index}>
                <View style={[styles.task]}>
                    <Text>{task}</Text>
                </View>
            </Pressable>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
  });
  
export default TodoList;