import React from 'react';
import { View,Text, StyleSheet, Image, Button } from 'react-native';

export default function about({navigation}) {


    return (
      <View style={styles.container}>
            

        
          <Text>THIS IS ABOUT PAGE</Text>

      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },


});
