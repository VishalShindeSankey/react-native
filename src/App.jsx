import { StyleSheet, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
//navigation
import Authentication from './Authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const authContext = React.createContext();

const App = () => {
    const [userToken,setUserToken] = React.useState(null);

    const saveUser = (token)=>{
      setUserToken(token);
      AsyncStorage.setItem('userToken',token);
    }

    const removeUser = ()=>{
      setUserToken(null);
      AsyncStorage.removeItem('userToken');
    }

    const getTokenFromStorage = async()=>{
      try{
        let userToken = await AsyncStorage.getItem('userToken');
        setUserToken(userToken);
      }catch(err){
        console.log(err);
      }
    }

    React.useEffect(()=>{
      getTokenFromStorage();
    },[])

  return (
    // <SafeAreaView>
      <authContext.Provider value={{userToken,saveUser,removeUser}}>      
          <Authentication/>
      </authContext.Provider>
    // </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})