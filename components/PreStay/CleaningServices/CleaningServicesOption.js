import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RadioButton from '../RadioButton'

export default function CleaningServicesOption({item, changeSelection, isSelected}) {
  return (
    <View style={styles.row}>
        <RadioButton changeSelection={changeSelection} selected={isSelected}/>
        <Text style={styles.text}> {item.option}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    paddingVertical: '5%'
  },
  text: {
    fontSize: 18,
    marginLeft: 5
  }
})