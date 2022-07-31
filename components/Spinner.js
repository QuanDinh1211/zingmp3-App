import { View, ActivityIndicator } from 'react-native'
import React from 'react'

import styles from '../style/global'

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default Spinner