import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const PreStayTile = (props) => {
  return (
      <Pressable style={styles.container} >
        <View style={{backgroundColor:props.color,
                      height:'100%',
                      width:'30%',
                      borderRadius:25,
                      alignItems:'center',
                      justifyContent:'center',}}>
         <Ionicons style={styles.iconBIg} name={props.icon} size={60} color="black" />
        </View>
          <Text style={{fontSize:24,color:'#092240'}}>{props.name}</Text>
          <AntDesign name="right" size={40} color="#092240" />
      </Pressable>
  );
};

export default PreStayTile;

const styles = StyleSheet.create({
  container: {
    height:'16%',
    flexDirection: 'row',
    width:'95%',
    //paddingVertical: 6,
    marginTop: 6,
    justifyContent:'space-between',
    borderRadius:25,
    backgroundColor:'white',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  iconBIg:{
    color:'white',
   
  },
  wrapper:{
    height:'100%',
    width:'30%',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',

  }
})