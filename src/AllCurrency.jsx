import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator();

import Currencies from './screens/Currencies';
import CurrencyDetails from './screens/CurrencyDetails';
import Favourites from './screens/Favourites';

export default function AllCurrency() {
  return (
    <Stack.Navigator initialRouteName='Currencies'>
        <Stack.Screen
            name='Currencies'
            component={Currencies}
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