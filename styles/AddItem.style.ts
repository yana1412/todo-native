import { StyleSheet, TextInput } from 'react-native';
import { Button, Text, styled } from 'tamagui';
import { color, radius, size } from '@tamagui/themes'



export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:10,
        marginBottom: 30,
    },
});

export const ButtonStyled = styled(Button, {
    backgroundColor: color.blue10Dark,
    height: size.$5,
    borderRadius: radius[5],
    borderWidth: 2,
    borderColor: color.blue7Light,
})

export const TextStyled = styled(Text, {
    color: color.orange1Light,
})

export const TextInputStaled = styled(TextInput, {
    padding: 10,
    borderColor: 'red',
    width: 210,
    height: 50,
    borderWidth: 1,
})