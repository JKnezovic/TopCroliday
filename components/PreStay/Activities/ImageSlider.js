import { getObjectStateController } from 'parse/lib/browser/CoreManager';
import React, { useState } from 'react'
import {  View, Image, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window')
const height = width * 0.6;



export default function ImageSlider({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeDotIndicator = e => {
    let count = Math.ceil(e.nativeEvent.contentOffset.x/e.nativeEvent.layoutMeasurement.width);
    setCurrentIndex(count);
  }
  return (
    <View style={styles.container}>
      
      <ScrollView 
      horizontal 
      pagingEnabled
      onScroll={changeDotIndicator}>
        {images.map((image, idx) => 
            <Image key={idx} source={{uri: image.url()}} style={styles.image}/>
        )}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {images.map((image, index) => <Text key={index} style={currentIndex === index ? styles.dotActive : styles.dot}> ● </Text>)}
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    width,
    height
  },
  scrollView: {
    width,
    height
  },
  image: {
    width,
    height,
    resizeMode: 'cover'
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotActive: {
    fontSize: 20,
    color: 'white'
  },
  dot: {
    fontSize: 20,
    color: 'lightgrey'
  }
  
})
