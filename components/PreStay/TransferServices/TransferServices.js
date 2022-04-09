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
  
container: {
    minWidth: '100%',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    paddingTop:2,
    paddingHorizontal: '1%'

},
text: {
  flexDirection: 'column',
  flex: 9
},
phoneNumber: {
  color: 'blue'
},
tile: {
  flexDirection: 'row',
  alignItems: 'center', 
  backgroundColor: 'white',
  borderRadius: 25,
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginHorizontal: 5,
  marginVertical: 2 

},
iconContainer: {
  flex: 2,
  padding: 5,
  alignItems: 'center',
  marginRight: 5
}
})
