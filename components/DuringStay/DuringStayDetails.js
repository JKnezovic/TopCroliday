import React, { useEffect,useState,useLayoutEffect } from 'react';
import { View,Text, StyleSheet,ActivityIndicator } from 'react-native';
import Parse from "parse/react-native.js";
import { SliderBox } from "react-native-image-slider-box";

const DuringStayDetails = ({route,navigation}) => {
    const { objectId } = route.params;
  const [duringStayItem,setDuringStayItem] = useState(null)
  const [images,setImages] = useState([])


  const getActivity = async function() {
    const parseDuring = new Parse.Query('DuringStay');
    try {
      parseDuring.equalTo('objectId',objectId);
      let duringStay = await parseDuring.first();
      setDuringStayItem(duringStay);
      setImages([duringStay.get('tileImage').url()])
    } catch (error) {
      console.log('Error!', error.message);
    }
  }

/*   useLayoutEffect(() => {
    if(duringStayItem)
    navigation.setOptions({
      title:title
    });
}, [navigation,duringStayItem]); */

  useEffect(()=>{
    getActivity()
  },[]);

  if(!duringStayItem){
      return <ActivityIndicator style={styles.loader} size="large" color="#092240" />
  }
else{
  return (
        <View style={styles.container}>
        <SliderBox images={images} />
        <Text style={styles.bigText}>{duringStayItem.get("title")}</Text>
        <Text style={styles.description}>{duringStayItem.get("description")}</Text>
        </View>
  );
};}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  description:{
    color:'#092240',
    width:"90%",
    alignSelf:'center',
    lineHeight:20
  },
  text: {
    textAlign: "center",
  },
  bigText: {
    color:'#092240',
    fontSize: 26,
    paddingLeft:'5%',
    lineHeight: 84,
  }
});

export default DuringStayDetails;