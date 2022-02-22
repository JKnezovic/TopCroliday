import React from 'react'
import RadioButton from '../RadioButton'
import { View, Text } from 'react-native'


export default function TransferServicesOption({item, changeSelection, isSelected}) {
  return (
    <View>
      <RadioButton changeSelection={changeSelection} selected={isSelected}/>
      <Text>{item.option}</Text>
    </View>
  )
}
