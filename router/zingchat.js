import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Zingchat from '../screen/zingchat'

const ZingchatStack = createNativeStackNavigator();


const ZingchatStackScreen = () => {
    return (
        <ZingchatStack.Navigator >
            <ZingchatStack.Screen name="homeZingchat" component={Zingchat} options={{ headerShown: false }} />
        </ZingchatStack.Navigator>
    )
}

export default ZingchatStackScreen