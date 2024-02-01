import React, { useState } from 'react';

import { AddItemProps } from '../types/todo';

// import { styles } from '../styles/AddItem.style';
// import { Text } from 'tamagui'
import { ButtonStyled, TextStyled, TextInputStaled, ViewStyled } from '../styles/AddItem.styled';

export default function AddItem({ addNewItem }: AddItemProps) {
    const [value, setValue] = useState<string>('');

    const onPressHandler = () => {
        addNewItem(value);
        setValue('');
    }

    return (
        <ViewStyled>
            <TextInputStaled value={value} onChangeText={item => setValue(item)} placeholder='add todo' />
            {/* <Pressable style={styles.button} onPress={onPressHandler}>
                <Text>Add new todo</Text>
            </Pressable> */
            }
            <ButtonStyled onPress={onPressHandler} size="$5" theme="active">
                <TextStyled>Add item</TextStyled>
            </ButtonStyled>
        </ViewStyled>
    )
}







