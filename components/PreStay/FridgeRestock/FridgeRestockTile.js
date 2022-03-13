import React, {useState} from 'react'
import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import RadioButton from '../RadioButton';
import FridgeRestockModal from './Modal';


export default function FridgeRestockTile({item, changeSelection, isSelected, color}) {
  const [modalVisible, setModalVisible] = useState(false);
    const Icons = { 
      'MaterialIcons': MaterialIcons, 
      'Ionicons': Ionicons, 
      'FontAwesome': FontAwesome, 
      'FontAwesome5': FontAwesome5,
      'MaterialCommunityIcons': MaterialCommunityIcons }

      const Icon = Icons[item.iconBank];

      const showPreview = description => {
        if(description.length > 80)
          return description.substring(0,50) + '...'
        return description;
      }
    
  return (
    <Pressable style={styles.tile} onPress={()=>setModalVisible(true)}>
      <FridgeRestockModal 
            isVisible={modalVisible} 
            title={item.name} 
            description={item.description} 
            price={item.price}
            setModalVisible={setModalVisible}/>
      <View style={styles.iconContainer}>
        <Icon style={[styles.icon, {color: color}]} name={item.iconName} size={50}/>
      </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.bigText}>{item.name}</Text>
          <Text style={styles.smallText}>{showPreview(item.description)}</Text>
        </View>
      
      
      <RadioButton style={styles.radioButton} changeSelection={changeSelection} selected={isSelected}/>
    </Pressable>
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
  textContainer: {
    paddingRight: '1%'
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
