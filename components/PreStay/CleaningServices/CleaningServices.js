import React from 'react'
import { View } from 'react-native'
import { cleaningServices } from '../../../assets/data'
import CleaningServicesOption from './CleaningServicesOption'

export default function CleaningServices({changeSelection, selectedCleaningServices, setSelection}) {
  const items = cleaningServices.map(item =>
    <CleaningServicesOption key={item.id} item ={item} changeSelection={()=> changeSelection(setSelection, item.id)} isSelected={selectedCleaningServices[item.id]} />)
  return (
    <View>
        {items}
    </View>
  )
}
