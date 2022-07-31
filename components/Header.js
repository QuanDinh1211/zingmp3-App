import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { View, Image, TextInput } from 'react-native'

import styles from '../style/header'

const Header = () => {

    return (

        <View style={styles.wrapperHeader} >
            <View style={styles.headerAvar}>
                <Image style={styles.itemAvar} source={require('../assets/quan.png')} />
            </View>
            <View style={styles.headerSearch}>
                <View style={styles.headerSearchIcon}>
                    <EvilIcons name="search" size={26} color="#717171" />
                </View>
                <View style={styles.headerWrapInput}>
                    <TextInput
                        style={styles.headerInput}
                        placeholder='Tìm kiếm bài hát, nghệ sĩ...'
                        placeholderTextColor='#717171'
                    />
                </View>
            </View>
            <View style={styles.headerNotification}>
                <EvilIcons name="bell" size={28} color="#fff" />
            </View>
        </View>
    )
}

export default Header