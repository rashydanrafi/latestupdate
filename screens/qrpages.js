import React from 'react';
import { View,Text, StyleSheet, Image, Button } from 'react-native';

export default function qrpages({navigation}) {

  const buttonscanqr= () => {
      navigation.navigate('Scanpage');
  } 

    return (
      <View style={styles.container}>

            <Image source = {require('../screens/images/1.png')} style={styles.images}/>
            
        <View style={styles.scanqr}>
        <Button title='Scan QR' onPress={buttonscanqr} />
        </View>

        <View style={styles.instruction}>
          <Text>Find and scan QR Code near the entrance to start shopping</Text>
        </View>

      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },

  images:{
    width:220,
    height:220,
    marginTop: 90,
    marginHorizontal: 85,
  },

  scanqr:{
    marginTop: 50,
    marginHorizontal:120,
    backgroundColor: 'lightgrey',
    borderWidth:1,
    width: 150,
    height: 45,
  },

  instruction:{
    width: 200,
    height:45,
    marginTop: 20,
    marginHorizontal:100,
  }

});
