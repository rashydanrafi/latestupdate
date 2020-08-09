import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function ItemName({ item, pressHandler}) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <View style={styles.occ}>
            <AntDesign name="delete" size={18} color="#333" />
            <Text style={styles.text}>         {item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    occ:{
        flexDirection:'row',
        //alignItems:'center',
        //alignContent:'center',
        //padding:16,
        //marginTop:16,
        borderColor:'#bbb',
        borderStyle:'dashed',
        borderWidth:1,

        //justifyContent:'center',
    },

    text:{
        //textAlign:'center',
        fontWeight:'bold',
        marginTop:15,
  },
})