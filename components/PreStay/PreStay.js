import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import PreStayTile from './PreStayTile';
import Button from '../Button';
import {prestay, foodAndDrink, transferServices, cleaningServices} from '../../assets/data';
import Parse from "parse/react-native.js";
import {useNavigation} from '@react-navigation/native';
import ReservationContext from '../../ReservationContext';



const PreStay = () => {
  const navigation = useNavigation();
  const [prestayMenu, setPrestayMenu] = useState({})
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState({});
  const [selectedFridgeRestock, setSelectedFridgeRestock] = useState({});
  const [selectedTransfer, setSelectedTransfer] = useState({});
  const [selectedCleaningServices, setSelectedCleaningServices] = useState({});

  const reservation = useContext(ReservationContext);

  useEffect(()=>{
    populatePrestay(prestay);
    populateSelection(reservation);

    //get activities
    getActivities();
  }, [])
  const getActivities = async () => {
    let activitiesQuery = new Parse.Query('Activities');
    try {
      let queryResult = await activitiesQuery.find();
      setActivities(queryResult)

    } catch (error) {
      
    }
    
    

    /* setSelectedActivities(populateSelection(queryResult));
    setSelectedTransfer(populateSelection(transferServices));
    setSelectedFridgeRestock(populateSelection(foodAndDrink));
    setSelectedCleaningServices(populateSelection(cleaningServices));

    let tempSelectedActivities = {};
    queryResult.forEach(activityItem => tempSelectedActivities[activityItem.id]=false);
    setSelectedActivities(tempSelectedActivities); */
  }
/* const populateSelection = (items) => {
  let selection = {};
  items.forEach(item => selection[item.id] = false);
  return selection;
} */
const populateSelection = reservation => {
  console.log(reservation.get("choices"));
  let choices = reservation.get("choices");
  let tempActivities = {};
  choices["activities"].forEach(
    item => tempActivities[item.id] = true
  )
  setSelectedActivities(tempActivities);

  let tempcleaningServices = {};
  choices["cleaningServices"].forEach(
    item => tempcleaningServices[item.id] = true
  )
  setSelectedCleaningServices(tempcleaningServices);

  let tempFridgeRestock = {};
  choices["fridgeRestock"].forEach(
    item => tempFridgeRestock[item.id] = true
  )
  setSelectedFridgeRestock(tempFridgeRestock);

  let tempTransfer = {};
  choices["transfer"].forEach(
    item => tempTransfer[item.id] = true
  )
  setSelectedTransfer(tempTransfer);
}
const changeSelection = (setSelection, id) => {
  setSelection(prevState => ({
    ...prevState, 
    [id]: !prevState[id],}));
  
}

  const populatePrestay = prestay => {
    let menu = {};
    prestay.forEach(prestayElement => {
      menu[prestayElement.name] = false;
    })
    setPrestayMenu(menu);
  }
  const collapseItem = name => {
    setPrestayMenu(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }))
  }
  const submitSelection = () => {
    updateReservation(reservation);
    navigation.navigate("Main");
    
  }
  const createChoices = ()=>{
    const choices = {
      "fridgeRestock": fillChoice(foodAndDrink, selectedFridgeRestock),
      "cleaningServices": fillChoice(cleaningServices, selectedCleaningServices),
      "transfer": fillChoice(transferServices, selectedTransfer),
      "activities": fillChoice(activities, selectedActivities)
    }
    return choices;
  }
  const fillChoice = (items, selected) => {
    console.log(selected)
    let choice = [];
    items.forEach(
      item => {
        if(selected[item.id])
          choice.push(item);
      }
    )
      return choice;
  }
  const updateReservation = async function (reservation) {
    let Reservation = new Parse.Object('Reservation');
    Reservation.set('objectId', reservation.id);
    let choices = createChoices();
    Reservation.set('choices', choices);
    try {
      await Reservation.save();
  
    } catch (error) {
      Alert.alert('Error!', error.message);
    };
  };
 
 const items = prestay.map(value =>
    <PreStayTile item={value} 
    key={value.key}  
    isCollapsed = {prestayMenu[value.name]} 
    collapseItem={collapseItem} 
    changeSelection={changeSelection}
    setSelection={{setSelectedActivities, setSelectedCleaningServices, setSelectedFridgeRestock, setSelectedTransfer}}
    activities={activities}
    selectedItems={{selectedFridgeRestock, selectedActivities, selectedTransfer, selectedCleaningServices}}/>)
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {items}
      </ScrollView>
      <Button style={styles.button} title={'Submit'} onPress={()=>submitSelection()}/>
    </View>
      
         
      
  );
};

export default PreStay;

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    padding: 12
  },
  button: {
    position: 'absolute',
    bottom: 30
  }
})