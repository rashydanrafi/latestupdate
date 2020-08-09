import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Value } from 'react-native-reanimated';
// import * as firebase from "firebase";
// import auth from "@react-native-firebase/auth";
import app from "../config/fire"; 

export default function Home({navigation}) {
    const [emails, SetEmails] = useState (null);
    const [pass, SetPass] = useState (null);
    //Function to signup user -- Takes the value of emails initialized on line 10 and pass initialized on line 11
    const signUpUser = async () => {
      try {
        if (pass.length < 6 && emails.length < 6) {
          alert("Please enter atleast 6 characters for Password / Valid Email");
          return;
        }
        //emails and pass from state initialized from lines 10 & 11
       // firebase.auth().createUserWithEmailAndPassword(emails, pass);
      await app.auth().createUserWithEmailAndPassword(emails, pass).then(()=>{
        Alert.alert('CONGRATULATION!', 'You Have Registered! \n You Can Now Login');
      });
      // console.log(emails);
      }
      catch (error) {
        alert("Please enter atleast 6 characters for Password / Valid Email");
      }
      };

    const loginUser = async () => {
      try{
      if (emails && pass || emails == null || pass == null || emails && pass == null ){
        await app.auth().signInWithEmailAndPassword(emails, pass).then(()=>{
          navigation.navigate('Homepage');
        }).catch(error => {
          Alert.alert('Invalid Email Or Password', "Press SIGNUP if you don't have an account");
        });

      }
    } catch(error){
      console.log(error.toString(error));
    }
    };
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}> Welcome to Automated Payment System (A.P.S)</Text>
      </View>

      <View style={styles.subheader}> 
        <Text style={styles.italicText}>
          An Innovative Shopping Experience
        </Text>
      </View>

      <View style={styles.formemail}>
        <Text> Enter Your Email For Log In / Sign Up: </Text>
        <TextInput
         style={styles.emailss}
         multiline
         placeholder='your_email@mail.com'
         onChangeText={(val) => SetEmails(val)} 
         />
      </View>

      <View style={styles.formpassword}>
        <Text> Enter Your Password: </Text>
        <TextInput
         style={styles.passwords}
         secureTextEntry
         placeholder='yourpasswordhere'
         onChangeText={(val) => SetPass(val)} 
         />
      </View>

      {/* calls the function loginUser and signUpUser onPress  */}
      <View style={styles.loginButton}>
      <Button title="LOGIN" onPress={loginUser} />
      </View>

      <View style={styles.signupButton}>
      <Button title="SIGNUP" onPress={signUpUser} />
      </View>

      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: 'steelblue',
    width: 412,
    height: 150,
    paddingLeft: 10,
    justifyContent: "center",
  },

  boldText: {
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,

  },

  italicText: {
    fontStyle: 'italic',
    textAlign:'center',
  },

  formemail:{
    paddingTop: 30,
    justifyContent:'center',
    alignItems: 'center',
  },

  formpassword:{
    paddingTop: 10,
    justifyContent:'center',
    alignItems: 'center',
  },

  emailss:{
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin:10,
    width:200,
  },

  passwords:{
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin:10,
    width:200,
  },

  loginButton:{
    marginTop: 10,
    marginHorizontal:150,
    backgroundColor: 'aqua',
    width: 85,
    height: 45,
    borderColor: 'black',
    borderWidth:1,
  },

  signupButton:{
    marginTop: 10,
    marginHorizontal:150,
    backgroundColor: 'aqua',
    width: 85,
    height: 45,
    borderColor: 'black',
    borderWidth:1,
  },

});


