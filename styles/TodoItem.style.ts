import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center',
        width: 350,
        borderWidth: 1,
        borderColor:'blue',
        borderRadius:10,
        padding:20,
        marginBottom: 20,
    },
    checkbox: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 18,
        marginBottom:5,
        
    },
    delete: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'blue',
    },
    btnText :{
        color:'#ffff',
        fontSize: 18,
    }
});

