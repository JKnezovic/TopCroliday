import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PreStayTile from './PreStayTile';
import Button from '../Button';
import {prestay} from '../../assets/data';

const PreStay = (props) => {
 
  const items=prestay.map((value)=>
   <PreStayTile item={value} key={value.key} />) 
  return (
    <>
      <View style={styles.container}>
        {items} 
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