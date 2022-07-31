import { StyleSheet } from 'react-native'


const CENTER = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const styles = StyleSheet.create({
    wrapperDiscover: {
        width: '100%',
        backgroundColor: '#fff',
    },
    discoverContainer: {
        width: '100%',
        height: '100%',
        paddingTop: 90,
        zIndex: 50
    },
    discerContent: {
        width: '100%',
        height: 5000,
    },
    contenSlide: {
        width: '100%',
        height: 200,
        ...CENTER,
        backgroundColor: '#333',
    }
})

export default styles