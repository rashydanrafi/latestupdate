import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function qrscanner({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  //function after ok being pressed.
  const pressScanner= () => {
    //Insert data fetch and transfer function here//
    navigation.navigate('Itemlistpage');
} 

/*going back once press cancel
const cancelScanner= () => {
  navigation.navigate('Scanpage');
} */

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  //Bila Dah Di Scan, Function ni yang main peranan utk keluarkan apa.
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //alert(`Bar code with type ${type} and data ${data} has been scanned! \n Sini Main peranan  `);
    Alert.alert('SCANNED',`Bar code with type ${type} and data ${data} has been scanned! \n Sini Main peranan `,
    [
      {
        text: 'GO TO ITEMLIST                             ',
        onPress:() =>pressScanner(),
      },
      {
        text: 'SCAN AGAIN                             ',
        onPress:() =>setScanned(false),
      },
    ],
    { cancelable: false }
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      
         {/*Passing undefined to the onBarCodeScanned prop will result in no scanning. This can be used to effectively "pause" the scanner so that it doesn't continually scan even after data has been retrieved.*/}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
