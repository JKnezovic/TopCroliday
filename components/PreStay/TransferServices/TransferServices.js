import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { transferServices, infoTransfer } from '../../../assets/data'
import TransferServicesOption from './TransferServicesOption'
import { FontAwesome } from '@expo/vector-icons';


export default function TransferServices( {changeSelection, selectedTransferServices, setSelection, color}) {
    const items = transferServices.map(item => 
        <TransferServicesOption
                key={item.id}
                item={item} 
                changeSelection={()=>changeSelection(setSelection, item.id)}
                isSelected={selectedTransferServices[item.id]}
                color={color}/>)
  return (
    <View style={styles.container}>
        {items}
        <View style={styles.tile}>
          <View style={styles.iconContainer}>
            <FontAwesome style={[styles.icon, {color: color}]} name={'info'} size={40}/>
          </View>
        <View style={styles.text}>
          <Text>{infoTransfer.description}</Text>
          <Text onPress={()=>Linking.openURL(`tel:${infoTransfer.phoneNumber}`)}
                style={styles.phoneNumber}>{infoTransfer.phoneNumber}</Text>
        </View>
        </View>
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
    paddingLeft: '2%',
    paddingRight: '4%',
    paddingVertical: '5%'
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
},
container: {
  alignItems: 'center'
},
text: {
  flexDirection: 'column'
},
phoneNumber: {
  color: 'blue'
}
})
