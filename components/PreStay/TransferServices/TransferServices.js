import React from 'react'
import { View } from 'react-native'
import { transferServices } from '../../../assets/data'
import TransferServicesOption from './TransferServicesOption'

export default function TransferServices( {changeSelection, selectedTransferServices, setSelection}) {
    
    const items = transferServices.map(item => 
        <TransferServicesOption
                key={item.id}
                item={item} 
                changeSelection={()=>changeSelection(setSelection, item.id)}
                isSelected={selectedTransferServices[item.id]}/>)
  return (
    <View>
        {items}
    </View>
  )
}
