import React, {useEffect, useState} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import PreStayTile from './PreStayTile';
import Button from '../Button';
import {prestay, foodAndDrink, transferServices, cleaningServices} from '../../assets/data';
import Parse from "parse/react-native.js";
import {useNavigation} from '@react-navigation/native';



const PreStay = (props) => {
  const navigation = useNavigation();
  const [prestayMenu, setPrestayMenu] = useState({})
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState({});
  const [selectedFridgeRestock, setSelectedFridgeRestock] = useState({});
  const [selectedTransfer, setSelectedTransfer] = useState({});
  const [selectedCleaningServices, setSelectedCleaningServices] = useState({});

  useEffect(()=>{
    populatePrestay(prestay);

    //get activities
    getActivities();
  }, [])
  const getActivities = async () => {
    let activitiesQuery = new Parse.Query('Activities');
    let queryResult = await activitiesQuery.find();
    setActivities(queryResult)

    setSelectedActivities(populateSelection(queryResult));
    setSelectedTransfer(populateSelection(transferServices));
    setSelectedFridgeRestock(populateSelection(foodAndDrink));
    setSelectedCleaningServices(populateSelection(cleaningServices));

    let tempSelectedActivities = {};
    queryResult.forEach(activityItem => tempSelectedActivities[activityItem.id]=false);
    setSelectedActivities(tempSelectedActivities);
  }
const populateSelection = (items) => {
  let selection = {};
  items.forEach(item => selection[item.id] = false);
  return selection;
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
    const choices ={
      "fridgeRestock": "",
      "cleaningServices": "",
      "transfer": "",
      "activities": []}
    updateReservation();
    navigation.navigate("Main");
    
  }
  const updateReservation = async function () {
    let Reservation = new Parse.Object('Reservation');
    Reservation.set('objectId', 'QvrCZ14UsY');
    let choices = {'test': 'test'}
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
      <Button style={{position: 'absolute'}} title={'Submit'} onPress={()=>submitSelection()}/>
    </View>
      
         
      
  );
};

export default PreStay;

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  containerTest: {
    height:'16%',
    flexDirection: 'row',
    width:'95%',
    paddingVertical: 6,
    marginTop: 6,
    justifyContent:'space-between',
    borderRadius:25,
    backgroundColor:'white',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
})