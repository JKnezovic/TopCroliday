import React from 'react';
import { View, StyleSheet } from 'react-native';
import { foodAndDrink } from '../../../assets/data';
import FridgeRestockTile from './FridgeRestockTile';

export default function FridgeRestock({changeSelection, selectedFridgeRestock, setSelection, color}) {
    const items = 
      foodAndDrink.map((item) => 
        <FridgeRestockTile item={item} 
                            key={item.id}
                            changeSelection={()=>changeSelection(setSelection, item.id)}
                            selectedFridgeRestock={selectedFridgeRestock} 
                            setSelection={setSelection}
                            isSelected={selectedFridgeRestock[item.id]}
                            color={color}/>)
  return (
    <View style={styles.container}>
        {items}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    paddingTop:2,
    paddingHorizontal: '1%',
    paddingBottom:5
  }
})