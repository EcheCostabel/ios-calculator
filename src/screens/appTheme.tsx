import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    littleResult:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    calcContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center'
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: '300'
    }

 })