import React from 'react'
import RadioButton from '../RadioButton'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';



export default function TransferServicesOption({item, changeSelection, isSelected, color}) {
  return (
    <View style={styles.tile}>
      <View style={styles.iconContainer}>
        <FontAwesome5 style={[styles.icon, {color: color}]} name={item.iconName} size={40}/>
      </View>
        
          <Text style={styles.bigText}>{item.option}</Text>
          
      
      
      <RadioButton style={styles.radioButton} changeSelection={changeSelection} selected={isSelected}/>
    </View>
  )
}
const styles = StyleSheet.create({
  tile: {
      flexDirection: 'row',
      minWidth: '80%',
      width: '85%',
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
  radioButton: {
    margin: '1%',
    padding: '1%'
  },
  iconContainer: {
    width: '30%',
    alignItems: 'center'
  },
  icon: {
    margin: 10
  },
  bigText: {
    fontSize:20,
    color:'#092240',
    marginRight: '1%'

  }
})