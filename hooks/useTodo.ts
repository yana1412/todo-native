import React, { useState } from 'react';
import "react-native-get-random-values";
import { v1 as uuidv1 } from 'uuid';

import { TodoItem as TodoItemType } from '../types/todo';

const initialValue = [
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
]

export default function useTodo() {
    const [todos, setTodos] = useState<TodoItemType[]>(initialValue);
    
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

    return { todos, addNewItem, deleteItem, setCheckedItem }
}

