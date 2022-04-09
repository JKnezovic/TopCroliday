import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Activities from './Activities/Activities';
import FridgeRestock from './FridgeRestock/FridgeRestock';
import TransferServices from './TransferServices/TransferServices';
import CleaningServices from './CleaningServices/CleaningServices';

const PreStayTile = ({item, isCollapsed, collapseItem, activities, changeSelection, selectedItems, setSelection}) => {
  const renderSwitch = (name, color) => {
    switch(name){
      case 'Food and drink':
        return <FridgeRestock 
                  changeSelection={changeSelection} 
                  selectedFridgeRestock={selectedItems.selectedFridgeRestock} 
                  setSelection={setSelection.setSelectedFridgeRestock}
                  color={color}/>
      case 'Activities':
        return <Activities 
                  changeSelection={changeSelection} 
                  activities={activities} 
                  selectedActivities={selectedItems.selectedActivities} 
                  setSelection={setSelection.setSelectedActivities}
                  />
      case 'Transfer':
        return <TransferServices 
                  changeSelection={changeSelection} 
                  selectedTransferServices={selectedItems.selectedTransfer} 
                  setSelection={setSelection.setSelectedTransfer}
                  color={color}/>
      case 'Cleaning Services':
        return <CleaningServices 
                  changeSelection={changeSelection} 
                  selectedCleaningServices={selectedItems.selectedCleaningServices} 
                  setSelection={setSelection.setSelectedCleaningServices}
                  color={color}/>
    }

  }
  const { color, iconName, name } = item;
  return (
    <>
      <Pressable style={{width: '100%'}} onPress={()=> collapseItem(name)}>
        <View style={styles.tile}>
          <View style={{width:'30%', backgroundColor: color, borderRadius:25, alignItems:'center',paddingVertical:18,
              justifyContent:'center'}}>
            <Ionicons style={styles.iconBig} name={iconName} size={60}/>
          </View>
          <Text style={{fontSize:24,color:'#092240'}}>{name}</Text>
          <AntDesign name={isCollapsed ? "up" : "down"} size={30} color="#092240" />
        </View>
          <View style={{alignItems: 'center'}}>
            {isCollapsed && renderSwitch(name, color)}
          </View>
      </Pressable>
    </>
      
  );
};

export default PreStayTile;

const styles = StyleSheet.create({
  tile: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 

    justifyContent: 'space-between',
    borderRadius:25,
    backgroundColor:'white',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 6,
    paddingRight: 6
  },
  iconBig:{
    color:'white',
  }
})