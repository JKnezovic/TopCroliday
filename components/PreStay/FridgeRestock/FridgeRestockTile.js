import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import RadioButton from '../RadioButton';

export default function FridgeRestockTile({item, changeSelection, isSelected, color}) {
    const Icons = { 
      'MaterialIcons': MaterialIcons, 
      'Ionicons': Ionicons, 
      'FontAwesome': FontAwesome, 
      'FontAwesome5': FontAwesome5 }

      const Icon = Icons[item.iconBank];
    
  return (
    <View style={styles.tile}>
      <View style={styles.iconContainer}>
        <Icon style={[styles.icon, {color: color}]} name={item.iconName} size={50}/>
      </View>
        
        <View>
          <Text style={styles.bigText}>{item.name}</Text>
          <Text style={styles.smallText}>{item.description}</Text>
        </View>
      
      
      <RadioButton style={styles.radioButton} changeSelection={changeSelection} selected={isSelected}/>
    </View>
  )
}
const styles = StyleSheet.create({
  tile: {
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
  radioButton: {
    
  },
  iconContainer: {
    width: '30%',
    alignItems: 'center'
  },
  icon: {
    color: 'red',
    margin: 10
  },
  bigText: {
    fontSize:20,
    color:'#092240'

  },
  smallText: {
    flex: 1,
    flexWrap: 'wrap'
  }
})
