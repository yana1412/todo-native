import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { AddItemProps } from '../types/todo';

import { styles } from '../styles/AddItem.style';

// import { Text } from 'tamagui'
import { ButtonStyled, TextStyled, TextInputStaled } from '../styles/AddItem.style';

export default function AddItem({ addNewItem }: AddItemProps) {
    const [value, setValue] = useState<string>('');

    const onPressHandler = () => {
        addNewItem(value);
        setValue('');
    }

    return (
        <View style={styles.wrapper}>
            <TextInputStaled value={value} onChangeText={item => setValue(item)} placeholder='add todo' />
            {/* <Pressable style={styles.button} onPress={onPressHandler}>
                <Text>Add new todo</Text>
            </Pressable> */
            }
            <ButtonStyled onPress={onPressHandler} size="$5" theme="active">
                <TextStyled>Add item</TextStyled>
            </ButtonStyled>
        </View>
    )
}







