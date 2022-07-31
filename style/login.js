import { StyleSheet } from 'react-native'

import stylesGlobal from './global'
import { color } from './_valibal'

const styles = StyleSheet.create({
    container: stylesGlobal.container,
    logo: {
        height: 200,
        width: 200
    },
    wrapperInput: {
        height: 40,
        width: 280,
        backgroundColor: color.primaryBg,
        borderRadius: 40,
        marginBottom: 10,
    },
    input: {
        height: '100%',
        width: '100%',
        padding: 10,
        color: color.white,
    },
    textForgot: {
        padding: 10,
    },
    wrapperLogin: {
        height: 45,
        width: 150,
        marginTop: 50,
        backgroundColor: color.primaryBg,
        borderRadius: 40,
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin: {
        color: color.white,
        fontSize: 18,
        fontWeight: 'bold',
    }

})

export default styles