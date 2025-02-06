import React from 'react'

import { Image } from 'react-native';
//navigation

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home';
import CurrencyNavigator from './CurrencyNavigator';
import Profile from '../screens/Profile';

import { Provider } from 'react-redux';
// import { store,persistor } from '../redux/store';
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const BottomTab = createBottomTabNavigator();


const TabNavigator = () => {

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}

      
      <BottomTab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false, tabBarStyle: {
            backgroundColor: 'white'
          }
        }}
      >

        <BottomTab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../images/home.png')}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />

        <BottomTab.Screen
          name='CurrencyNavigator'
          component={CurrencyNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require('../images/cryptocurrencies.png')}
                style={{ width: 20, height: 20 }}
              />
            ),
          }
          }
        />

        <BottomTab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../images/user.png')}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />

      </BottomTab.Navigator>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default TabNavigator