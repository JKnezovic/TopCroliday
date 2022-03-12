import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { cleaningServices, infoCleaningServices } from '../../../assets/data'
import CleaningServicesOption from './CleaningServicesOption'
import { FontAwesome } from '@expo/vector-icons';


export default function CleaningServices({changeSelection, selectedCleaningServices, setSelection, color}) {
  const items = cleaningServices.map(item =>
    <CleaningServicesOption 
          key={item.id} 
          item ={item} 
          changeSelection={()=> changeSelection(setSelection, item.id)} 
          isSelected={selectedCleaningServices[item.id]}
          color={color} />)
  return (
    <View style={styles.container}>
        {items}
        <View style={styles.tile}>
          <View style={styles.iconContainer}>
            <FontAwesome style={[styles.icon, {color: color}]} name={'info'} size={40}/>
          </View>
        
          <Text> {infoCleaningServices}</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 40,
    paddingHorizontal: '2%'
},
tileLeft: {
  flexDirection: 'row',
  width: '70%'
},
iconContainer: {
  width: '30%',
  alignItems: 'center'
},
icon: {
  margin: 10
}         
})
