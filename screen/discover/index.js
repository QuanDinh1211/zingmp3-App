import { View, Text, ScrollView, Animated } from 'react-native'
import React from 'react'

import styles from '../../style/discover'
import Header from '../../components/Header'
import transformHeader from '../../ultil/transHeader'
import Slide from '../../components/slide'

const Discover = () => {

    const { srollY, translateY, transOpacity } = transformHeader()

    const handlerScrollConten = (event) => {
        srollY.setValue(event.nativeEvent.contentOffset.y)
    }

    return (
        <View style={styles.wrapperDiscover}>
            <Animated.View style={{
                zIndex: 100,
                transform: [
                    {
                        translateY: translateY,
                    }
                ],
                opacity: transOpacity
            }}>
                <Header />
            </Animated.View>
            <ScrollView
                style={styles.discoverContainer}
                showsVerticalScrollIndicator={false}
                onScroll={handlerScrollConten}
            >
                <View style={styles.discerContent}>
                    <View style={styles.contenSlide}>
                        {/* <Slide /> */}
                    </View>
                    <View>
                        <Text>list Cate</Text>
                    </View>
                    <View>
                        <Text>play list</Text>
                    </View>
                    <View>
                        <Text>album</Text>
                    </View>
                    <View>
                        <Text>Nghệ sĩ</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Discover