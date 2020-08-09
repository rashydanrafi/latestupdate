import React from 'react';
import { View,Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default function qrpages({navigation}) {

  const pressScanner= () => {
      navigation.navigate('QRscanner');
  } 

    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headertext}>SCAN YOUR ITEM</Text>
        </View>

        <View>
          <Text style={styles.subheader}> You're ready! Welcome to</Text>
          <Text style={styles.subheadertext}>Tesco Kepong</Text>
        </View>
        <TouchableOpacity onPress={() => pressScanner()}>
            <Image source = {require('../screens/images/scan1.png')} style={styles.images}/> 

            <View>
              <Text style={styles.scan}> Tap to scan your first item</Text>
            </View>
            </TouchableOpacity> 

      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#339CFF',
    height: 30,
  },
  headertext: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 20,
  },

  subheader: {
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },

  subheadertext: {
    textAlign:'center',
    fontWeight: 'bold',
    color: 'steelblue',
    fontSize:25,
  },

  images:{
    width:300,
    height:300,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop: 30,
  },

  scan: {
    textAlign:'center',
    fontWeight: 'bold',
    color: 'blue',
    fontSize:12,
  },

});
