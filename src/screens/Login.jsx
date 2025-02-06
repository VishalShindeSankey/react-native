import { StyleSheet, Text, View, TextInput,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import axios from 'axios';
import { authContext } from '../App';

//redux
// import { useDispatch } from 'react-redux';
// import { setUser } from '../redux/userActions';

export default function Login({navigation}) {
    const[userData,setUserData] = React.useState({
        email:'',
        password:''
    });

    const {saveUser} = React.useContext(authContext); 
    //redux
    // const dispatch = useDispatch();

    const handleChange = (name,value)=>{
        setUserData(
            {...userData,
            [name]:value
            }
        )
    }


    const handleClick = async()=>{
        try{
            const res = await axios.get(`https://67a05ffb24322f8329c5fc7d.mockapi.io/crypto/users?email=${userData.email}&password=${userData.password}`);

            if(res.status !== 200){
                Alert.alert("Wrong email/password")
            }else{
                //redux
                // dispatch(setUser(res.data[0]));
                saveUser('vishal');
                // navigation.navigate('App');
            }
        }catch(err){
            console.log(err);
            Alert.alert("Wrong email/password")
        }
    
    }

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.heading}>Login</Text>
            <TextInput
              placeholder='Email'
              style={styles.inputRow}
              placeholderTextColor="black"
              onChangeText={(text)=>handleChange('email',text)}
              value={userData.email}
              name='email'
            />
            <TextInput
              placeholder='Password'
              style={styles.inputRow}
              placeholderTextColor="black"
              value={userData.password}
              name='password'
              onChangeText={(text)=>handleChange('password',text)}
              secureTextEntry
            />
      
            
            <TouchableOpacity 
              style={styles.loginBtn}
              activeOpacity={0.6}
              onPress={()=>handleClick()}
            >
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={()=>navigation.navigate('Register')}
            >
                <Text style={styles.redirectText}>Dont have an account ? Register here</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer:{
        margin:'auto'

    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:15,
        alignSelf:'center'
    },  
    inputRow:{
        width:300,
        backgroundColor:'white',
        color:'black',
        borderWidth:1,
        marginVertical:10,
        borderRadius:5
    },
    showError:{
        color:'red',   
    },  
    loginBtn:{
        padding:15,
        backgroundColor:'blue',
        borderRadius:5
    },
    btnText:{
        color:'white',
        alignSelf:'center'
    },
    redirectText:{
        marginVertical:5,
        alignSelf:'center'
    }
})