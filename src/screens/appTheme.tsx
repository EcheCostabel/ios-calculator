import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    result: {
        color: 'white',
        fontSize: 70,
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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    },

 })