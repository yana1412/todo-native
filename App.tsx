
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import "react-native-get-random-values";

import InputComponent from './components/InputComponent';
import TodoItem from './components/TodoItem';

import { styles } from './styles/App.style';

import useTodo from './hooks/useTodo';

export default function App() {
  const { todos, addNewItem, deleteItem, setCheckedItem } = useTodo();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <InputComponent addNewItem={addNewItem} />
        {
          todos.map((el) => (
            <TodoItem el={el} key={el.id} deleteItem={deleteItem} setCheckedItem={setCheckedItem} />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}