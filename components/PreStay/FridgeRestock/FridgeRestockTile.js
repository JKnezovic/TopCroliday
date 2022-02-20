import React from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import RadioButton from '../RadioButton';

export default function FridgeRestockTile({item}) {
    const Icons = { 
      'MaterialIcons': MaterialIcons, 
      'Ionicons': Ionicons, 
      'FontAwesome': FontAwesome, 
      'FontAwesome5': FontAwesome5 }

      const Icon = Icons[item.iconBank];
    
  return (
    <View>
      <Icon name={item.iconName} size={60} color="black"/>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <RadioButton/>
    </View>
  )
}
