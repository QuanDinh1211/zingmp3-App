import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Follow from '../screen/follow'

const FollowStack = createNativeStackNavigator();


const FollowStackScreen = () => {
    return (
        <FollowStack.Navigator >
            <FollowStack.Screen name="homeFollow" component={Follow} options={{ headerShown: false }} />
        </FollowStack.Navigator>
    )
}

export default FollowStackScreen