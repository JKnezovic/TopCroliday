import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import RadioButton from '../RadioButton';

export default function FridgeRestockTile({item, changeSelection, isSelected}) {
    const Icons = { 
      'MaterialIcons': MaterialIcons, 
      'Ionicons': Ionicons, 
      'FontAwesome': FontAwesome, 
      'FontAwesome5': FontAwesome5 }

      const Icon = Icons[item.iconBank];
    
  return (
    <View style={styles.tile}>
      <View style={styles.tileLeft}>
        <Icon style={styles.icon} name={item.iconName} size={50} color="black"/>
        <View>
          <Text style={styles.bigText}>{item.name}</Text>
          <Text style={styles.smallText}>{item.description}</Text>
        </View>
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
      justifyContent: 'space-between',
      backgroundColor: 'white',
      margin: 2,
      borderRadius: 40
  },
  tileLeft: {
    flexDirection: 'row',
    width: '70%'
  },
  radioButton: {
    
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
