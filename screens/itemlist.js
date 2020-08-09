import React, {useState, useEffect} from 'react';
import { View,Text, StyleSheet, Image, Button, TouchableOpacity, FlatList, Alert} from 'react-native';
import ItemName from '../components/itemname';
import QuantityName from '../components/quantityname';
import PriceName from '../components/pricename';

export default function itemlistpage({navigation : { navigate }}) {

  //const [name, setName] = useState('Rashydan');

//CURRENT BALANCE OF DECLARATION
  const [currentbalance, setCurrentbalance] = useState(0);

  const clickHandler =() =>{
    // Alert.alert(
    //   "SUCCESFULLY TOPUP",
    //   "Your E-Wallet have been succesfully topup!",
    // )
    setCurrentbalance(currentbalance + 20);
    Alert.alert(
      "SUCCESFULLY TOPUP",
      "Your E-Wallet have been succesfully topup!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    // setCurrentbalance( + 20);
  }

//Paying function to check the balance is enough or not
  const buttonscanqr= (id) => {
    if (currentbalance < totalPrice){
      Alert.alert(
        "INSUFFICIENT BALANCE!",
        "Please TOP-UP Your E-Wallet",
        [
          {
            text: "CANCEL",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          //NAVIGATION FUNCTION AND PASSING VALUE OF CURRENTBALANCE AND TOTAL PRICE TO THE NEXT
          { text: "TOP-UP", onPress: () => 
          Alert.alert(
            "TOP UP YOUR BALANCE NOW",
            "MINIMUM TO TOP IS RM20",
            [ 
              {
                text: "TOP UP RM 20",
                onPress:() => clickHandler(),
              },
              {
                text: "TOP UP PAGE",
                onPress:() => navigate('Topuppage', { CB:currentbalance, TP: totalPrice})
              },
            ],
          )
           }
            //navigate('Topuppage', { CB:currentbalance, TP: totalPrice}) }
        ],
        { cancelable: false }
      );
       //setItemlist((prevItem) =>{
       //return prevItem.filter(itemlist => itemlist.id != id);
       //});
    } else {                                                             {/* WHEN CURRENT BALANCE HAVE MORE THAN TOTAL PRICE, GO TO TQ & RECEIPT PAGE*/}
      navigate('Thankyoupage');
    }
      //navigation.navigate('Confirmationpage');

  };
  
//BUTTON FOR GOING BACK TO SCANNING ITEM
   const scanningItem=() => {
    navigate('Scanpage');
  };
  
  //Item LIST of ARRAY and retrieving data from firebase
  const [itemlist, setItemlist] = useState([
    { name: 'Milo', price:1, quantity:1, id:'1'},
    { name: 'Bread', price:1, quantity:1,id:'2'},
    { name: 'Tuna', price:1, quantity:1, id:'3'},
    { name: 'Apple', price:1, quantity:1,id:'4'},
    { name: 'Coke', price:1, quantity:1, id:'5'},
    { name: 'Pepsi', price:1,quantity:1, id:'6'},
    { name: '7UP', price:1, quantity:1,  id:'7'},
    { name: 'Bottle', price:1,quantity:1,id:'8'},
    { name: 'Napkin', price:1,quantity:1,id:'9'},
    { name: 'Cup', price:1, quantity:1,  id:'10'},
  ]);

  //Function of DELETING ITEM ONCE PRESSED TO DELETE ITEM
  const pressHandler =(id) => {
    Alert.alert(
      "DELETING ITEM",
      "Are You Sure Want To Delete This Item?",
      [
        {
          text: "CANCEL",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "YES", onPress: () => deletHandler(id) }
      ],
      { cancelable: false }
    );
     //setItemlist((prevItem) =>{
     //return prevItem.filter(itemlist => itemlist.id != id);
     //});
  }

  //DELETING ITEM FROM LIST ARRAY
  const deletHandler=(id) =>{
     setItemlist((prevItem) =>{
     return prevItem.filter(itemlist => itemlist.id != id);
     });
    }

    //SUBTRACT ITEM QUANTITY FROM THE LIST
  const onSubtract =(item,index) => {
      const [itemlist, setItemlist] = useState(0);
      itemlist[index].quantity += 1;
      setItemlist ({itemlist});
    }

    //ADDIN ITEM QUANTITY FROM THE LIST
  const onAdd =(item,index) => {
    const [itemlist, setItemlist] = useState(0);
    itemlist[index].quantity += 1;
    setItemlist ({itemlist});
  }

  
    //DECLARATION OF TOTALQUANTITY, TOTAL PRICE AND ADDING INTO IN FUNCTION
    let totalQuantity = 0;
    let totalPrice = 0;
    itemlist.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      
  <View style={styles.container}>
    {/*HEADER*/}
        <View style={styles.header}>
          <Text style={styles.headertext}> YOUR ITEM LIST</Text>
        </View>
      <View style={styles.itemlist}>

    {/*PRODUCT NAME , QUANTITY AND PRICE TABLE*/}
          <View style={styles.product}>
            <Text style={styles.producttext}>Product Name</Text>
            <FlatList
        keyExtractor={(item) => item.id}
        data={itemlist}
        renderItem={({ item }) => (

           //CALLING FUNCTION FROM OTHER PAGE TO IMPORT IN HERE
           <ItemName item={item} pressHandler={pressHandler} />        
        )}
        />
        </View>

          <View style={styles.quantity}>
          <Text style={styles.quantitytext}>Quantity</Text>
          <FlatList
        keyExtractor={(item) => item.id}
        data={itemlist}
        renderItem={({ item }) => (

          //CALLING FUNCTION FROM OTHER PAGE TO IMPORT IN HERE
          <QuantityName item={item} />
       // <Text style={styles.item}>{item.quantity}</Text>
        )}
        />
        </View>

          <View style={styles.price}>
          <Text style={styles.pricetext}>Price</Text>
          <FlatList
        keyExtractor={(item) => item.id}
        data={itemlist}
        renderItem={({ item }) => (

          //CALLING FUNCTION FROM OTHER PAGE TO IMPORT IN HERE
          <PriceName item={item}/>
        //<Text style={styles.item}> RM{item.price}</Text>
        )}
        />
        </View>
      </View>


      {/*CALLING AND DISPLAYING TOTAL ITEM, PRICE AND CURRENT BALANCE */}
      <View style={styles.total} >
        <Text style={styles.totaltext}>TOTAL ITEM : {totalQuantity}</Text>
        <Text style={styles.totaltext}>TOTAL PRICE : RM{totalPrice}   {'\n\n'} CURRENT E-WALLET BALANCE : RM {currentbalance}</Text>

      </View>


      {/*FOOTER*/}
      <View style={styles.footer} >
      <TouchableOpacity onPress={() => scanningItem()}>
            <Image source = {require('../screens/images/barcode.png')} style={styles.images}/>
        </TouchableOpacity>

        {/*<View style={styles.footerbutton}>
        <Button
          title="CHECKOUT"
          color="#ffff"
          onPress={() => buttonscanqr()}
        /> 
        </View>*/}

      <TouchableOpacity onPress={() => buttonscanqr()} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>PAY</Text>
      </TouchableOpacity>
      </View>
      

  </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgrey',
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
  itemlist: {
    flex:8,
    backgroundColor:'yellow',
    flexDirection:'row',
    borderColor:'black',
    borderWidth:1,
  },
  product: {
    flex:3,
    backgroundColor:'blue',
        //borderColor:'black',
        //borderWidth:1,
  },
  producttext:{
    textAlign:'center',
    fontWeight:'bold',
    borderColor:'black',
    borderBottomWidth:1,
  },
  quantity: {
    flex:1,
    backgroundColor:'pink',
    borderColor:'black',
    //borderWidth:1,
  },
  quantitytext:{
    textAlign:'center',
    fontWeight:'bold',
    borderBottomWidth:1,
  },
  price:{
    flex:1,
    backgroundColor:'red',
    borderColor:'black',
    borderBottomWidth:1,
  },
  pricetext:{
    textAlign:'center',
    fontWeight:'bold',
    borderBottomWidth:1,
  },
  total:{
    flex:1,
    flexDirection:'row',
    marginTop:20,
  },
  totaltext:{
    fontWeight:'bold',
    fontSize:12,
    marginLeft:40,

  },
  footer:{
    flex:2,
    flexDirection:'row',
    backgroundColor: '#339CFF',
    borderWidth:1,
    borderColor:'black',
    justifyContent:'space-around',
  },
  appButtonContainer: {
    elevation: 15,
    backgroundColor: "#ffff",
    width:60,
    height:50,
    justifyContent:'center',
    marginVertical:25,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'black',
    //paddingVertical: 10,
    //paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 11,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontStyle:'italic',
    fontSize:25,
  },
  images:{
    width:90,
    height:90,
    marginTop: 6,
    borderWidth:1,
    borderColor:'black',
    backgroundColor:"#ffff",
  },
  /*item:{
    textAlign:'center',
    fontSize:18,
  },*/
});
