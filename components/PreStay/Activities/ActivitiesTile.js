import * as React from 'react';
import {  StyleSheet, Text, Pressable, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RadioButton from '../RadioButton';

const ActivitiesTile = ({item, changeSelection, isSelected}) => {
  return (
    <Pressable style={styles.container}>
        <ImageBackground source={{uri: item.get("tileImage").url()}} resizeMode="cover" style={styles.image}>
              <RadioButton style={styles.icon} changeSelection={changeSelection} selected={isSelected}/>
              <LinearGradient 
              style={styles.textBox}
              colors={['transparent','rgba(0,0,0,0.6)']}>
                <Text style={styles.title}>
                  {item.get("Name")} 
                </Text>
              </LinearGradient>
        </ImageBackground>
    </Pressable>
  );
};

export default ActivitiesTile;

const styles = StyleSheet.create({
  container: {
    height:115,
    width: '48%',
/*     shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2, */
  },
  image: {
    flex: 1,
    overflow:'hidden',
    borderRadius:15,
  },
  icon:{
    alignSelf:'flex-end',
    marginRight:'4%',
    marginTop:'2%',
    //color:'red'
  },
  textBox:{
    //flex:1,
    position:'absolute',
    //right:0,
    bottom:0,
    width:'100%'
  },
  title: {
    flex:1,
    fontSize: 16,
    color:'white',
    width:'100%',
    paddingLeft:'8%',
    paddingBottom:'2%'
  },
});

