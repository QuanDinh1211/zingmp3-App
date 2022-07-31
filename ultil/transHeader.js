import { Animated } from 'react-native'
import { useRef } from 'react'

const transformHeader = () => {

    const srollY = useRef(new Animated.Value(0)).current
    const diffClamp = Animated.diffClamp(srollY, 0, 80)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 80],
        outputRange: [0, -80],
    })
    const transOpacity = diffClamp.interpolate({
        inputRange: [0, 80],
        outputRange: [1, 0],
    })

    return {
        srollY,
        translateY,
        transOpacity
    }

}

export default transformHeader