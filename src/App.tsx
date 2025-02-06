import { StyleSheet, Image} from 'react-native'
import React from 'react'

//navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home';
import AllCurrency from './AllCurrency';
import Profile from './screens/Profile';


const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
      <BottomTab.Navigator 
          initialRouteName='Home' 
          screenOptions={{ 
              headerShown: false ,tabBarStyle: { 
              backgroundColor: 'white'}
          }}
      >

        <BottomTab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./images/home.png')}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name='AllCurrency'
          component={AllCurrency}
          options={{ 
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={require('./images/cryptocurrencies.png')}
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
                source={ require('./images/user.png')}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />

      </BottomTab.Navigator>
  )
}

export default App

const styles = StyleSheet.create({})