import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Library from '../screen/library'

const LibraryStack = createNativeStackNavigator();


const LibraryStackScreen = () => {
    return (
        <LibraryStack.Navigator >
            <LibraryStack.Screen name="homeLibrary" component={Library} options={{ headerShown: false }} />
        </LibraryStack.Navigator>
    )
}

export default LibraryStackScreen