import { View, Text } from 'react-native'
import React from 'react'


//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './App';
import Register from './screens/Register';
import Login from './screens/Login';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    const userData = useSelector((state)=>state.user.user);
    console.log(userData);
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={userData ? 'App':'Login'} screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name='App'
                component={App}
            />
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Register'
                component={Register}
            />

        </Stack.Navigator>
    
    </NavigationContainer>
  )
}

export default AuthNavigator