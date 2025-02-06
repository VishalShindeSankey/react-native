import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function Register({navigation}) {

    const[userData, setUserData] = React.useState({
        name:'',
        email:'',
        password:''
    });

    const [flag,setFlag] = React.useState(false);

    const handleChange = (name,value)=>{
        setUserData(
            {...userData,
            [name]:value
            }
        )
    }

    const doesExist = async(email)=>{
        try{
            const res = await axios.get(`https://67a05ffb24322f8329c5fc7d.mockapi.io/crypto/users?email=${email}`);
            console.log(res);
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }

    const addUser = async ()=>{
        try{
            const res = await axios.post('https://67a05ffb24322f8329c5fc7d.mockapi.io/crypto/users',userData);
            console.log(res);
        }catch(err){
            console.log(err);
        }
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    async function handleClick(){
        if(userData.name && userData.email && userData.password){
            if(emailRegex.test(userData.email)){

                const user = await doesExist(userData.email);
                console.log(user);
                
                if(user){
                    console.log("user exists");
                    setFlag(true);                
                }else{
                    await addUser();
                    setFlag(false);
                    navigation.navigate('Login');
                    console.log("User added succesfully");
                }

            }else{
                Alert.alert("Invalid Email!")
            }
        }
        
    }

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.heading}>Register</Text>
      <TextInput
        placeholder='Name'
        style={styles.inputRow}
        placeholderTextColor="black"
        onChangeText={(text)=>handleChange('name',text)}
        value={userData.name}
        name='name'
      />
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

        {flag && <Text style={styles.showError}>Email already exist!</Text>}
      
      <TouchableOpacity 
        style={styles.registerBtn}
        activeOpacity={0.6}
        onPress={()=>handleClick()}
      >
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={()=>navigation.navigate('Login')}
      >
        <Text style={styles.redirectText}>Already have an account ? login here</Text>
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
    registerBtn:{
        padding:15,
        backgroundColor:'blue',
        borderRadius:5

    },
    btnText:{
        color:'white',
        alignSelf:'center',
    },
    redirectText:{
        marginVertical:5,
        alignSelf:'center'
    }

   
})