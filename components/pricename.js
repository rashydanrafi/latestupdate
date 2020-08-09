import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';


export default function ItemName({ item }) {

    return (
        //<TouchableOpacity>
            <View style={styles.occ}>
            <Text style={styles.text}>RM{item.price}</Text>
            </View>
        //</TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    occ:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        borderColor:'#bbb',
        borderStyle:'dashed',
        borderWidth:1,

        //justifyContent:'center',
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        marginTop:15,
        marginHorizontal:20,
  },
})