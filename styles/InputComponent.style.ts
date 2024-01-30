import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:10,
        marginBottom: 30,
    },

    input: {
        padding: 10,
        fontSize: 15,
        borderColor: 'red',
        width: 210,
        height: 50,
        borderWidth: 1,
    },
    button: {
        backgroundColor: 'red',
        width:100,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius: 5,
    },
});
