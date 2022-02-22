import React from 'react'
import { View, Text } from 'react-native'
import RadioButton from '../RadioButton'

export default function CleaningServicesOption({item, changeSelection, isSelected}) {
  return (
    <View>
        <RadioButton changeSelection={changeSelection} selected={isSelected}/>
        <Text> {item.option}</Text>
    </View>
  )
}
