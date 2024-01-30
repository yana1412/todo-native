import React, { useState } from 'react';
import { Pressable, TextInput, View, Text } from 'react-native';

import { AddItemProps } from '../types/todo';

import { styles } from '../styles/AddItem.style';

export default function AddItem({ addNewItem }: AddItemProps) {
    const [value, setValue] = useState<string>('');

    const onPressHandler = () => {
        addNewItem(value);
        setValue('');
    }

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input} value={value} onChangeText={item => setValue(item)} placeholder='add todo' />
            <Pressable style={styles.button} onPress={onPressHandler}>
                <Text>Add new todo</Text>
            </Pressable>
        </View>
    )
}







