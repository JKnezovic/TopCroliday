import React, { useEffect,useState,useRef, useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList,ActivityIndicator } from 'react-native';
import DuringStayTile from './DuringStayTile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from "parse/react-native.js";
import { AntDesign } from '@expo/vector-icons';
import ReservationContext from '../../ReservationContext';


const DuringStay = ({navigation}) => {
  const [favoriteList,setFavoriteList] = useState({})
  const [duringStayItems,setDuringStayItems] = useState(null)
  const [fullData,setFullData] = useState([])
  const [showFavorites,setShowFavorites] = useState(false)
  const reservation = React.useContext(ReservationContext)

  const favRef = useRef(null);
  favRef.current = favoriteList;
  const fulldataRef = useRef(null);
  fulldataRef.current = fullData;

  const updateFavoriteList=(id,isFavorite)=>{
    setFavoriteList(favoriteList=>{return {...favoriteList,[id]:isFavorite}})
  }

  const handleFavorite = () => {
    if(showFavorites){
      setDuringStayItems(fullData);
    }
    else{
      const filteredData =  fulldataRef.current.filter(item => (favRef.current.hasOwnProperty(item.id) && favRef.current[item.id]===true))
      setDuringStayItems(filteredData);
    }
    setShowFavorites(!showFavorites)
  }

  const storeFavoriteList = async (list) => {
    if(list){
       try {
      let arrayValue = JSON.stringify(list)
      await AsyncStorage.setItem('favoriteList', arrayValue)
    } catch (error) {
      console.log(error)
    }
    }
  }

  const getFavoriteList = async () => {
    try {
      let arrayValue = await AsyncStorage.getItem('favoriteList')
      arrayValue != null ? setFavoriteList(JSON.parse(arrayValue)) : null;
    } catch (error) {
      console.log(error)
    }
  }

  const getActivities = async function() {
    const parseDuring = new Parse.Query('DuringStay');
    try {
      parseDuring.equalTo('locations',reservation.get("location"));
      let duringStay = await parseDuring.find();
      setDuringStayItems(duringStay);
      setFullData(duringStay);
    } catch (error) {
      console.log('Error!', error.message);
    }

  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

  useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <AntDesign onPress={()=>handleFavorite()} name={showFavorites?"heart":"hearto"} size={24} color={showFavorites?"#c99a00":"white"} />
        ),
      });
  }, [navigation,showFavorites]);

  useEffect(()=>{
    getFavoriteList()
    getActivities()

    return ()=> storeFavoriteList(favRef.current)
  },[]);


  if(!duringStayItems){
    return <ActivityIndicator style={styles.loader} size="large" color="#092240" />
}
else{

  return (
        <View style={styles.container}>
             <FlatList
              data={duringStayItems}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
              <DuringStayTile 
               source={ {uri: item.get('tileImage').url()} } 
               title={item.get('title')} 
               objectId={item.id} 
               updateFavoriteList={updateFavoriteList}
               favoriteList={favoriteList}
               showFavorites={showFavorites} />
              )}
            /> 
        </View>
  );}
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  loader:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default DuringStay;