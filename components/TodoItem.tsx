import React from "react";
import { Pressable, View, Text } from "react-native";
import AnimatedCheckbox from 'react-native-checkbox-reanimated';

import { TodoItemProps } from '../types/todo'

import { styles } from '../styles/TodoItem.style';

export default function TodoItem({ el, deleteItem, markItemAsChecked }: TodoItemProps) {

    const setCheckedItemHandler = () => {
        markItemAsChecked(el.id, !el.checked)
    }

    const deleteItemHandler = () => {
        deleteItem(el.id)
    }


    return (
        <View style={styles.wrapper}>
            <Pressable style={styles.checkbox} onPress={setCheckedItemHandler}>
                <AnimatedCheckbox
                    checked={el.checked}
                    highlightColor="#4444ff"
                    checkmarkColor="#ffffff"
                    boxOutlineColor="#4444ff" />
            </Pressable>
            <Text style={styles.text}>{el.name}</Text>
            <Pressable style={styles.delete} onPress={deleteItemHandler}>
                <Text style={styles.text}>delete</Text>
            </Pressable>
        </View>
    )
}
