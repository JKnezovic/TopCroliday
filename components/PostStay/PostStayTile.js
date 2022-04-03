import * as React from 'react';
import { StyleSheet, Text, TextInput, View, ToastAndroid} from 'react-native';
import Button from '../Button';
import ReservationContext from '../../ReservationContext';
import {useNavigation} from '@react-navigation/native';
import Parse from "parse/react-native.js";


const PostStayTile = ({number,children}) => {
    const navigation = useNavigation();
    const [comment, setComment] = React.useState("")
    const reservation = React.useContext(ReservationContext)

    const onSubmit=()=>{
        updateReservation(reservation);
        ToastAndroid.show('Your selection has been saved', ToastAndroid.SHORT);
        navigation.navigate("Main");
    }

    const updateReservation = async function (reservation) {
        let Reservation = new Parse.Object('Reservation');
        Reservation.set('objectId', reservation.id);
        Reservation.set('postStayComment', comment);
        try {
          await Reservation.save();
      
        } catch (error) {
          Alert.alert('Error!', error.message);
        };
      };

  return (
      <View style={styles.container}>
          <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={styles.number}>{number}</Text>
                {children}
          </View>
          {number===3 && 
          <View>
          <View style={styles.textArea}>
            <TextInput 
                multiline
                numberOfLines={5}
                placeholder={'   Your experience..'}
                style={{marginHorizontal:'1%'}}
                textAlignVertical={'top'}
                onChangeText={(text) => setComment(text)}>
            </TextInput>
          </View>
          <Button title={'Submit'} small={true} onPress={()=>onSubmit()} ></Button>
          </View>}
          
      </View>
  );
};

export default PostStayTile;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    width:"95%",
    backgroundColor:"white",
    marginTop: 10,
    paddingBottom:10,
    borderRadius:25,
    /* borderRightWidth:2,
    borderBottomWidth:2,
    borderColor:"#c99a00", */
  },
  number: {
    alignSelf:'flex-start',
    marginLeft:"2%",
    marginTop: "2%",
    marginRight: "2%",
    padding:5,
    color:"#c99a00",
    width:50,
    height:50,
    borderRadius:50,
    borderLeftWidth:2,
    borderTopWidth:2,
    borderColor:"#c99a00",
    fontSize:30,
    textAlign:'center'
  },
  textArea:{
      width:'95%',
      borderWidth:1,
      borderColor:'grey',
      borderRadius: 10,
      marginVertical:'5%',
      alignSelf:'center',
      
  }
})