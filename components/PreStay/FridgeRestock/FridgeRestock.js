import React from 'react';
import { View } from 'react-native';
import { foodAndDrink } from '../../../assets/data';
import FridgeRestockTile from './FridgeRestockTile';

export default function FridgeRestock({changeSelection, selectedFridgeRestock, setSelection}) {
    const items = 
      foodAndDrink.map((item) => 
        <FridgeRestockTile item={item} 
                            key={item.id}
                            changeSelection={()=>changeSelection(setSelection, item.id)}
                            selectedFridgeRestock={selectedFridgeRestock} 
                            setSelection={setSelection}
                            isSelected={selectedFridgeRestock[item.id]}/>)
  return (
    <View>
        {items}
    </View>
  )
}
