import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Register from "../screens/register";
import Login from "../screens/login";
import Homepage from "../screens/homepage";
import QRpage from "../screens/qrpages";
import Scanpage from "../screens/scanpage";
import Itemlistpage from '../screens/itemlist';
import Thankyoupage from '../screens/thankyoupage';
import Topuppage from '../screens/topup';
import Header from '../shared/header';
import React from 'react';
import QRscanner from '../screens/qrscanner';

const screens = {

    Home: {
        screen: Login,
      },
      Register: {
        screen: Register,
      },    

    Homepage: {
       screen: Homepage,
       navigationOptions: ({ navigation }) => {
         return{
           headerTitle: () => <Header navigation={navigation} />,
         }
       }
    },

    QRpage: {
      screen: QRpage,
      navigationOptions: ({ navigation }) => {
        return{
          headerTitle: () => <Header navigation={navigation} />,
        }
      }
    }, 

    Scanpage: {
      screen:Scanpage,
      navigationOptions: ({ navigation }) => {
        return{
          headerTitle: () => <Header navigation={navigation} />,
        }
      }
    },
    QRscanner: {
      screen: QRscanner,
      navigationOptions: ({ navigation }) => {
        return{
          headerTitle: () => <Header navigation={navigation} />,
        }
      }
    },

    Itemlistpage: {
      screen: Itemlistpage,
      navigationOptions: ({ navigation }) => {
        return{
          headerTitle: () => <Header navigation={navigation} />,
        }
      }
    }, 

  Thankyoupage: {
         screen: Thankyoupage,
         navigationOptions: ({ navigation }) => {
          return{
            headerTitle: () => <Header navigation={navigation} />,
          }
        }
     },

     Topuppage:{
         screen: Topuppage,
         navigationOptions: ({ navigation }) => {
          return{
            headerTitle: () => <Header navigation={navigation} />,
          }
        }
     },

     
    }; 

    const HomeStack = createStackNavigator(screens);

    export default HomeStack;