import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#a2d2ff',
        alignItems: 'center',
        justifyContent: 'center'

    },

    container: {
        backgroundColor: '#bde0fe',
        height: '37%',
        width: '25%',
        borderRadius: '4px'
    },

    caixa: {
        height: '25px',
        borderRadius: 5,
        backgroundColor: '#cdb4db',
        padding: '20px',
        width: '70%',
        marginVertical: '2rem',
        marginHorizontal: 'auto'
    },

    button: {
        backgroundColor: '#000',
        color: '#fff',
        width: '20%',
        marginLeft: '4.5rem',
        borderRadius: '4px',
        textAlign: 'center',
        fontFamily: 'Helvetica',
        padding: '0.4rem'

    }


})

export default styles