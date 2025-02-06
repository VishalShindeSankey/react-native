import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator();

import AllCurrencies from '../screens/AllCurrencies';
import CurrencyDetails from '../screens/CurrencyDetails';
import Favourites from '../screens/Favourites';

export default function CurrencyNavigator() {
  return (
    <Stack.Navigator initialRouteName='AllCurrencies'>
        <Stack.Screen
            name='AllCurrencies'
            component={AllCurrencies}
        />

        <Stack.Screen
            name='CurrencyDetails'
            component={CurrencyDetails}
        />

        <Stack.Screen
            name='Favourites'
            component={Favourites}
        />
      
      
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})