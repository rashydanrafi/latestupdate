import React from 'react';
import { View,Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default function Thankyoupage({navigation}) {

    const logoutHandler=() =>{
        navigation.navigate('Home');
    };
    const continueHandler=() =>{
        navigation.navigate('Scanpage');
    };
    const printhandler=() =>{
        console.log('print receipt');
    };
    const Separator = () => (
        <View style={styles.separator} />
      );
    return (
      <View style={styles.container}>
          <Image source = {require('../screens/images/thankyou_.gif')} style={styles.images}/>


          <Separator />
          <Button title='LOG OUT' onPress={logoutHandler} /> 
          <Separator />
          <Button title='CONTINUE SHOPPING' onPress={continueHandler} /> 
          <Separator />
          <Button title='EMAIL RECEIPT' onPress={printhandler} />
          <Separator />
      


      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgrey',
  },

  images:{
    //   flex: 1,
      width: 380,
      height: 300,
      alignSelf:'center',
  },

  button:{
      flex:1,
      width:10,
      height:20,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
