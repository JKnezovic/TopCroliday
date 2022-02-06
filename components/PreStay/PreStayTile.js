import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const PreStayTile = (props) => {
  return (
      <View style={styles.container}>
          <LinearGradient 
              style={styles.textBox}
              colors={['transparent','rgba(0,0,0,0.6)']}>
                <Text style={styles.textBig}>
                  {props.title} 
                  <AntDesign name="right" size={30} color="white" />
                </Text>
                <Text style={styles.desc}>{props.desc}</Text>
              </LinearGradient>
      </View>
  );
};

export default PreStayTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'95%',
    paddingVertical: 6,
    marginBottom: 6,
  },
  image: {
    flex: 1,
    borderRadius:15,
    overflow:'hidden'
  },
  textBox:{
    position:'absolute',
    right:0,
    bottom:0,
    width:'100%'

  },
  textBig:{
    fontSize: 42,    
    color:'white',
    textAlign:'right',
    paddingRight:'2%'
  },
  desc:{
    fontSize:12,    
    color:'white',
    paddingLeft:'2%',
    paddingBottom:'2%'
  }

});
