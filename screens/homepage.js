import React, { Component } from 'react';
import { StyleSheet, View,Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 500,
    alignSelf:'center',
  },

  gambar: {
      flex:1,
      backgroundColor: '#D3D3D3',
  }
});
 
const slides = [
  {
    key: 'scanqr',
    title: 'GET STARTED!',
    text: '1. Scan the QR Code of the store you want to shop',
    image: require('./images/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'scanbarcode',
    text: "2. Start scanning the product's barcode to add item into your trolley",
    image: require('./images/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'trolley',
    text: '3. Keep track of the price and quantity of\nyour item inside the trolley', 
    image: require('./images/3.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
  {
    key: 'checkout',
    text: '4. When you are done, just checkout and\nmake payment in the app. No hassle, no\nmore queueing at the checkout counter',
    image: require('./images/4.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },

  {
    key: 'shopping',
    title: "You're all set!",
    text: 'You are ready to start you shopping.\n Press the Done to continue..',
    image: require('./images/5.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];
 
export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }

  //_renderNextButton = () => {
//};
//_renderDoneButton = () => {
//};
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    //this.setState({ showRealApp: true });
    this.props.navigation.navigate('QRpage');
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    //this.setState({ showRealApp: true });
    this.props.navigation.navigate('QRpage');
  };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.gambar}>
        <Text style={{textAlign:'center'}}>{item.title} </Text>
        <Image source={item.image} style={styles.image} backgroundColor={item.backgroundColor} />
        <Text style={{textAlign:'center'}}>{item.text}</Text>
      </View>
    );
  }
 
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
              <Text>aaaaaaaaaaaaaaaaaaa</Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          showNextButton={true}
          onSkip={this._onSkip}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
        />
      );
    }
  }
}