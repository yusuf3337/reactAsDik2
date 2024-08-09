import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
  Pressable,
  Image
   } from 'react-native';

import React, {useState} from 'react';
import Loading from "./src/components/Loading"

export default function App() {

const [name,setName] = useState("")
const [password,setPassword] = useState("")
const [result,setResult] = useState('')
const [isLoading,setIsLoading] = useState(false)

console.log(isLoading)


  return (
    <View style={styles.container}>

    <Image
    style={styles.passwdStyle}
    source={require("/Users/yusuf/Desktop/reactAll/reactAsDik2/assets/images/passwdicon.png")}
    />


      <Text style={styles.welcomeStyle}>Welcome {result}</Text>
      
      <Text>Email</Text>
      
      <TextInput
      inputMode='email'
       style={styles.textInputStyle}
       placeholder='Enter Your Email'
       onChangeText={setName}
       />

      <Text>Password</Text>
      <TextInput
      secureTextEntry={true}
      style={styles.textInputStyle}
      keyboardType='numeric'
      placeholder='Enter Your Password'
      onChangeText={setPassword}
      />

    <Pressable
      onPress={() => setIsLoading(true)}
      style={({ pressed }) => [{
        backgroundColor: pressed ? "gray" : 'orange'
      }, styles.buttonStyle]}>

      <Text style={styles.buttonText}>Login</Text>

    </Pressable>

      {isLoading ? 
      <Loading 
      changeIsLoading={() => setIsLoading(false)}/>
       : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle:{
    borderWidth:1,
    height:45,
    width:250,
    marginVertical:8,
    padding:10,
    borderRadius:20,
    textAlign:'center'
  },
  buttonStyle: {
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Loading yazısına yer açmak için butonun altına boşluk ekliyoruz.
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  passwdStyle:{
    height:80,
    width:80,
  },
  welcomeStyle:{
    fontWeight:'bold',
    fontSize:22
  }
});
