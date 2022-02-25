import React, { useState, useEffect } from 'react'
import {  View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import ImageSlider from './ImageSlider';
import Parse from "parse/react-native.js";


const screenHeight = Dimensions.get('window').height
export default function AboutActivity({route}) {
    const [activity, setActivity] = useState(null)
    useEffect(()=>{
        getActivity(route.params.activityId);
    }, [])
    const getActivity = async (activityId) => {
        const activityQuery = new Parse.Query('Activities');
        activityQuery.equalTo("objectId", activityId);
        try {
          let tempActivity = await activityQuery.first();
          setActivity(tempActivity)
          
        } catch (error) {
          console.log('Error!', error.message);
          return false;
        };
      }
  return (
    <View style={styles.container}>
        <ImageSlider/>
        {activity && 
        <ScrollView style={styles.scrollView}>
        <Text style={styles.title}> {activity.get('Name')}
            </Text>
        <Text style={styles.description}>
            {activity.get('description')}
        </Text>
        </ScrollView>}
        
    </View>
  )
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
    fontSize: 20
  },
  description: {
    fontSize: 15
  }
})
