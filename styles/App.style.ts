
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
