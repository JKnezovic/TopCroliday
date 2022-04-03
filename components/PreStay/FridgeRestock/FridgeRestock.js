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
    alignItems: 'center',
    width: '80%'
  }
})