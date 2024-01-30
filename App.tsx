
import { useState } from 'react';
import { Pressable, TextInput, View, Text, ScrollView, SafeAreaView } from 'react-native';

import TodoItem from './components/TodoItem';
import { ITodoItem } from './types/todo'
import { styles } from './styles/App.style'


export default function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([
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
  ])

  const [value, setValue] = useState<string>('')

  const addNewItem = () => {
    const NewItem = {
      id: Math.random(),
      name: value,
      checked: false
    }
    setTodos(todos => [...todos, NewItem])
    setValue('')
  }

  const deleteItem = (id: number) => {
    setTodos(todos.filter(i => i.id !== id))
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
        <View style={styles.wrapper}>
          <TextInput style={styles.input} value={value} onChangeText={item => setValue(item)} placeholder='add todo'/>
          <Pressable style={styles.button} onPress={addNewItem}>
            <Text>Add new todo</Text>
          </Pressable>
        </View>
        {
          todos.map((el) => (
            <TodoItem el={el} key={el.id} deleteItem={deleteItem} setCheckedItem={setCheckedItem} />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}







