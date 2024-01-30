import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center',
        width: 320,
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 20,
    },
    checkbox: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 16,
    },
    delete: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'red'
    }
});

