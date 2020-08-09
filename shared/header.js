import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header({ navigation }) {

    const openMenu =() =>{
        console.log('MENU BAR IS PRESSED'),
        navigation.openDrawer();
    };

    return (
        <View styles={styles.header}>
            <MaterialIcons  name='menu' size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}> </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },

    headerText: {
        fontWeight:'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },

    icon: {
        position: 'relative',
        left:160,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:10,
    },
});