import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

import { AddItemProps } from '../types/todo';

import { styles } from '../styles/AddItem.style';

// import { Text } from 'tamagui'
import { ButtonStyled, TextStyled, TextInputStyled } from '../styles/AddItem.style';

export default function AddItem({ addNewItem }: AddItemProps) {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<number>(0);

    const [nameDirty, setNameDirty] = useState<boolean>(false);
    const [descriptionDirty, setDescriptionDirty] = useState<boolean>(false);
    const [dateDirty, setDateDirty] = useState<boolean>(false);

    const [nameError, setNameError] = useState('поле не може бути пустим');
    const [descriptionError, setDescriptionError] = useState('поле не може бути пустим');
    const [dateError, setDateError] = useState('поле не може бути пустим');

    const onPressHandler = () => {
        if (name && description && date) {
            addNewItem(name, description, date);
            setName('');
            setDescription('');
            setDate(0)
        }
    }

    return (
        <View style={styles.container}>
            <View>
                {(nameDirty && nameError && <Text>{nameError}</Text>

                )}
                <TextInputStyled value={name} onChangeText={item => setName(item)} placeholder='add todo' />
                <TextInputStyled value={description} onChangeText={item => setDescription(item)} placeholder='add description' />
                <TextInputStyled value={date} onChangeText={item => setDate(item)} placeholder='add date' />
            </View>
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







