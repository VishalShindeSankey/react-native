import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { authContext } from '../App'

//redux
// import { useSelector, useDispatch } from 'react-redux'
// import { clearUser } from '../redux/userActions';

export default function News({ navigation }) {
  //it is use to select state from store here we are selecting only user state
  // const userData = useSelector((state) => state.user.user);
  // const dispatch = useDispatch();

  // if (!userData) {
  //   navigation.navigate('Login')
  // } else {
  //   console.log(Object.keys(userData));
  // }
  const {removeUser} = React.useContext(authContext);
  return (
    <>
      {/* {userData && */}
        <View>

          {/* <Text>Welcome {userData.name}, </Text>
          <Text>Id: {userData.id}</Text>
          <Text>email {userData.email}</Text> */}

          <TouchableOpacity
            onPress={() => {
              removeUser();
            }}
          >
            <Text>logout</Text>
          </TouchableOpacity>
        </View>
      {/* } */}
    </>
  )
}

const styles = StyleSheet.create({})