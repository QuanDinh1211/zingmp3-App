import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Discover from '../screen/discover'

const DiscoverStack = createNativeStackNavigator();


const DiscoverStackScreen = () => {
    return (
        <DiscoverStack.Navigator >
            <DiscoverStack.Screen name="homeDiscover" component={Discover} options={{ headerShown: false }} />
        </DiscoverStack.Navigator>
    )
}

export default DiscoverStackScreen