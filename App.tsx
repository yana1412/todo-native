
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import "react-native-get-random-values";
import '@tamagui/core/reset.css'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from './tamagui.config'

// import { Button, Text } from 'tamagui'

import AddItem from './components/AddItem';
import TodoItem from './components/TodoItem';


import { styles } from './styles/App.style';

import useTodo from './hooks/useTodo';

export default function App() {
  const { todos, addNewItem, deleteItem, markItemAsChecked } = useTodo();

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}  keyboardShouldPersistTaps={'handled'}>
          <AddItem addNewItem={addNewItem} />
          {
            todos.map((el) => (
              <TodoItem el={el} key={el.id} deleteItem={deleteItem} markItemAsChecked={markItemAsChecked} />
            ))
          }
        </ScrollView>
      </SafeAreaView>


      {/* <Button>
        <Text>My button</Text>
      </Button> */}
    </TamaguiProvider>
  );
}