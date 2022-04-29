import React, { useEffect,useState } from 'react';
import {Alert, View,Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import Parse from "parse/react-native.js";
import ImageSlider from '../PreStay/Activities/ImageSlider';


const DuringStayDetails = ({route}) => {
  const { objectId } = route.params;
  const [activity, setActivity] = useState(null);
  const [images, setImages] = useState([])


  const getActivity = async function() {
    const activityQuery = new Parse.Query('DuringStay');
    activityQuery.equalTo("objectId", objectId);
    const imagesQuery = new Parse.Query('Images');
    imagesQuery.matchesQuery('duringStayPointer', activityQuery);
    try {
        let joinedResults = await imagesQuery.find();
        let tempImages = [];
        joinedResults.forEach(
          element => {tempImages.push({image: element.get('image'), description: element.get("description")})
        }
        )
        setImages(tempImages)
        setActivity(joinedResults[0].get('duringStayPointer'))
        return true
        
      } catch (error) {
        console.log('Error!', error.message);
        Alert.alert('Error!', "Check your internet connection");
        return false

      };
    }


  useEffect(()=>{
    getActivity()
  },[]);

  if(activity && images)
  return (
    
    <View style={styles.container}>
        <ImageSlider images={images}/>
        {activity && 
        <ScrollView style={styles.scrollView}>
        <Text selectable={true} style={styles.title}> {activity.get('title')}
            </Text>
        <Text selectable={true} style={styles.description}>
            {activity.get('description')}
        </Text>
        </ScrollView>}
        
    </View>
  )
else
  return <ActivityIndicator style={styles.loader} size="large" color="#092240" />

        }

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1
  
    },
    scrollView: {
      flex: 1
    },
    title: {
      color:'#092240',
      fontSize: 26,
      paddingLeft:'5%',
      lineHeight: 84,
    },
    description: {
      color:'#092240',
      width:"90%",
      alignSelf:'center',
      lineHeight:20
    },
    loader:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })
  

export default DuringStayDetails;