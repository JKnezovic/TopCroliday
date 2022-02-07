import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PreStayTile from './PreStayTile';
import Button from '../Button';

const data = {
  fridge: {
    icon: 'cart',
    color: '#007d8c',
    name: 'Fridge Restock'
 },
  activities: {
    icon: 'bicycle',
    color: '#00ac8d',
    name: 'Activities'
  },
  transfer: {
    icon: 'car',
    color: '#004e70',
    name: 'Transfer'
  },
  cleaning: {
    icon: 'home',
    color: '#007d8c',
    name: 'Cleaning Services'
 }
}

const PreStay = (props) => {
  return (
    <>
      <View style={styles.container}>
          <PreStayTile icon={data.fridge.icon} color={data.fridge.color} name={data.fridge.name} />
          <PreStayTile icon={data.activities.icon} color={data.activities.color} name={data.activities.name} />
          <PreStayTile icon={data.transfer.icon} color={data.transfer.color} name={data.transfer.name} />
          <PreStayTile icon={data.cleaning.icon} color={data.cleaning.color} name={data.cleaning.name} />
          
      </View>
      <View style={{marginBottom:20}}><Button title={'Submit'}></Button></View>
      
    </>
      
  );
};

export default PreStay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  }
})