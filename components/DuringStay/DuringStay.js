import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {test} from '../../assets/data'
import DuringStayTile from './DuringStayTile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from "parse/react-native.js";


let favorite_object = {
  'bd7acbea-c111-46c2-aed5-3ad53abb28ba': true,
  '3ac68afc-c605-48d3-a4f8-fbd91aa97f63': true,
  'bd7acbea-c8b1-46c2-aed5-3ad53abb28ba': true
};

const DuringStay = ({reservation}) => {
  const [favoriteList,setFavoriteList] = React.useState({})

  const saveFavoriteList= async()=>{
    try {
      await AsyncStorage.setItem(
        'favoriteList',
        JSON.stringify(favorite_object),()=>{
          AsyncStorage.getItem('favoriteList',(err,result)=>{
            console.log(result)
          })
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  const getFavoriteList = async () => {
    try {
      const value = await AsyncStorage.getItem('favoriteList');
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getActivities = async ()=> {
    if(reservation){
    console.log(reservation)
    const activitiesQuery = new Parse.Query('Activities');
    activitiesQuery.equalTo('locations',reservation.get('location'));
    let activities = await activitiesQuery.find();
    console.log(activities);
}
  }

  useEffect(()=>{
    getActivities()
    getFavoriteList()})

  return (
        <View style={styles.container}>
             <FlatList
              data={test}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
              <DuringStayTile item={item} saveFavoriteList={saveFavoriteList} />
              )}
            /> 
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
});

export default DuringStay;