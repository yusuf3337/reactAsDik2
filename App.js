import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
  Pressable
   } from 'react-native';

import React, {useState} from 'react';

export default function App() {

const [name,setName] = useState("")
const [password,setPassword] = useState("")


  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
       style={styles.textInputStyle}
       placeholder='Enter Your Name'
       onChangeText={setName}
       />

      <Text>Password</Text>
      <TextInput
      style={styles.textInputStyle}
      keyboardType='numeric'
      placeholder='Enter Your Password'
      onChangeText={setPassword}
      />

      <Pressable
        onPress={()=> console.log("clicked")}
        style={styles.buttonStyle}>

        <Text style={styles.buttonText}>Save</Text>

      </Pressable>
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
  buttonStyle:{
    width:80,
    height:30,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'orange',
  },
  buttonText:{
    color:'white',
    fontWeight:'bold'
  }
});
