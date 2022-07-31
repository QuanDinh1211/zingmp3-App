import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserContext } from '../store/constexts/userContext'

import Login from '../screen/login'
import Spinner from '../components/Spinner'
import HomeTabs from './home'


const RootStackScreen = () => {

    const RootStack = createNativeStackNavigator()

    const { userState } = useContext(UserContext)

    const { isLoading, isAuthenticated } = userState

    if (isLoading) {
        return <Spinner />
    }

    return (
        <RootStack.Navigator>
            {isAuthenticated ?
                <RootStack.Screen name='home' component={HomeTabs} options={{ headerShown: false, animationEnabled: false }} />
                :
                <RootStack.Screen name='login' component={Login} options={{ headerShown: false, animationEnabled: false }} />
            }
        </RootStack.Navigator>
    )
}

export default RootStackScreen