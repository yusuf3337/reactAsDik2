import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Pressable } from 'react-native';

const Loading = ({name, changeIsLoading}) => {
  return (
    <View style={styles.container}>

    <Pressable 
    onPress={() => changeIsLoading()}
    style={styles[{},styles.closeButtonContainer]}>
        <Text style={styles.closeButton}>X</Text>
        </Pressable>

        <ActivityIndicator
        size={'small'}
        color={'blue'}
        />

      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        backgroundColor:'tomato',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'

    },
 loginText:{
    fontSize:22,
    fontWeight:'bold',
    color:'white',
    marginTop:20,
 },
 closeButtonContainer:{
    backgroundColor:'black',
    width:50,
    height:50,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:50,
    right:20
 },
 closeButton:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
 }
});

export default Loading;