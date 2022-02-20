import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Activities from './Activities/Activities';
import FridgeRestock from './FridgeRestock/FridgeRestock';
import { prestay } from '../../assets/data';

const PreStayTile = ({item, isCollapsed, collapseItem, activities, changeSelection, selectedActivities}) => {
  const renderSwitch = name => {
    switch(name){
      case 'Food and drink':
        return <FridgeRestock/>
      case 'Activities':
        return <Activities changeSelection={changeSelection} activities={activities} selectedActivities={selectedActivities}/>
      case 'Transfer':
        break;
      case 'cleaning Services':
        break;
    }

  }
  const { color, iconName, name } = item;
  return (
    <>
      <Pressable style={{width: '100%'}} onPress={()=> collapseItem(name)}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: 100}}>
      <View style={{height: '100%',width:'30%', backgroundColor: color, borderRadius:25, alignItems:'center',
             justifyContent:'center'}}>
          <Ionicons style={styles.iconBig} name={iconName} size={60} color="black" />
          </View>
            <Text style={{fontSize:24,color:'#092240'}}>{name}</Text>
            <AntDesign name={isCollapsed ? "up" : "down"} size={30} color="#092240" />
      </View>
          
        </Pressable>
        {isCollapsed && renderSwitch(name)}
    </>
      
  );
};

export default PreStayTile;

const styles = StyleSheet.create({
  container: {
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
  iconBig:{
    color:'white',
   
  }
})