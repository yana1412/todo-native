
import React, { useState } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import "react-native-get-random-values";
import { v1 as uuidv1 } from 'uuid';

import InputComponent from './components/InputComponent';
import TodoItem from './components/TodoItem';

import { TodoItem as TodoItemType } from './types/todo';

import { styles } from './styles/App.style';

export default function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([
    {
      id: 0,
      name: 'todo 1',
      checked: false
    },
    {
      id: 1,
      name: 'todo 2',
      checked: false
    }
  ]);

  const addNewItem = (value: string) => {
    const NewItem = {
      id: uuidv1(),
      name: value,
      checked: false
    };

    setTodos(todos => [...todos, NewItem]);
  }

  const deleteItem = (id: number) => {
    setTodos(todos.filter(i => i.id !== id));
  }

  const setCheckedItem = (id: number, state: boolean) => {
    const index = todos.findIndex(i => i.id === id);

    let newTodos = [...todos];
    newTodos[index].checked = state;
    setTodos(newTodos);
  }

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