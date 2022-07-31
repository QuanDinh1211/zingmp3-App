import { MaterialIcons, Feather, MaterialCommunityIcons, Ionicons, Foundation } from '@expo/vector-icons';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LibraryStackScreen from './library'
import DiscoverStackScreen from './discover'
import ZingchatStackScreen from './zingchat'
import RadioStackScreen from './radio'
import FollowStackScreen from './follow'

const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tabs.Navigator screenOptions={{
            tabBarActiveTintColor: '#c662ef',
            tabBarStyle: {
                display: "flex",
            }
        }} initialRouteName='discover'
        >
            <Tabs.Screen name="library" component={LibraryStackScreen} options={{ headerShown: false, tabBarLabel: 'Cá nhân', tabBarIcon: ({ color }) => <MaterialIcons name="library-music" size={24} color={color} /> }} />
            <Tabs.Screen name="discover" component={DiscoverStackScreen} options={{ headerShown: false, tabBarLabel: 'Khám phá', tabBarIcon: ({ color }) => <Feather name="disc" size={24} color={color} /> }} />
            <Tabs.Screen name="zingchat" component={ZingchatStackScreen} options={{ headerShown: false, tabBarLabel: 'Zingchat', tabBarIcon: ({ color }) => <MaterialCommunityIcons name="music-circle-outline" size={24} color={color} /> }} />
            <Tabs.Screen name="radio" component={RadioStackScreen} options={{ headerShown: false, tabBarLabel: 'Radio', tabBarIcon: ({ color }) => <Ionicons name="radio" size={24} color={color} /> }} />
            <Tabs.Screen name="follow" component={FollowStackScreen} options={{ headerShown: false, tabBarLabel: 'Theo dõi', tabBarIcon: ({ color }) => <Foundation name="clipboard-notes" size={24} color={color} /> }} />
        </Tabs.Navigator >
    )
}

export default HomeTabs