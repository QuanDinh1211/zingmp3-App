import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Radio from '../screen/radio'

const RadioStack = createNativeStackNavigator();


const RadioStackScreen = () => {
    return (
        <RadioStack.Navigator >
            <RadioStack.Screen name="homeRadio" component={Radio} options={{ headerShown: false }} />
        </RadioStack.Navigator>
    )
}

export default RadioStackScreen