import { StyleSheet } from 'react-native'
import stylesGlobal from './global'
import { color } from './_valibal'

const MT20 = {
    marginTop: 20
}

const styles = StyleSheet.create({
    container: stylesGlobal.container,
    wrapperHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    headerAvar: {
        ...MT20,
        marginLeft: 15,
        width: 30,
        height: 30,
        borderRadius: 15,
        overflow: 'hidden',
    },
    itemAvar: {
        width: '100%',
        height: '100%',
    },
    headerSearch: {
        ...MT20,
        marginLeft: 10,
        flex: 1,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    headerSearchIcon: {
        height: '100%',
        width: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerWrapInput: {
        height: '100%',
        flex: 1,
    },
    headerInput: {
        marginLeft: 5,
        marginRight: 5
    },
    headerNotification: {
        ...MT20,
        width: 30,
        marginLeft: 10,
        marginRight: 15,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default styles