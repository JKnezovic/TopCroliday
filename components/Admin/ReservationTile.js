import * as React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';


const ReservationTile = ({name,startDate, endDate}) => {
  return (
      <Pressable style={styles.container} >
        <View style={{ 
          width:'95%',
          height:'100%',
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center'}}>
            <Text style={{width:"100%",paddingLeft:20}}>{name}</Text>
            <View style={{flexDirection:'row'}}>  
              <Text>{startDate.toLocaleDateString("en-US").toString() + ' - '}</Text>
              <Text>{endDate.toLocaleDateString("en-US").toString()}</Text>
            </View>
          

        </View>
      </Pressable>
  );
};

export default ReservationTile;

const styles = StyleSheet.create({
  container: {
    height:'16%',
    flexDirection: 'row',
    width:'95%',
    marginTop: 6,
    borderRadius:25,
    backgroundColor:'white',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  wrapper:{
    height:'100%',
    width:'30%',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',

  }
})