import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Navigators/TabNavigator';
import AuthNavigator from './Navigators/AuthNavigator';

import { authContext } from './App';

const Authentication = () => {
    const { userToken } = React.useContext(authContext);

    return (
        <NavigationContainer>

            {userToken ?
                <TabNavigator />
                :
                <AuthNavigator />
            }
        </NavigationContainer>


    )
}

export default Authentication