import { getObjectStateController } from 'parse/lib/browser/CoreManager';
import React, { useState } from 'react'
import {  View, Image, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window')
const height = width * 0.6;

const images = [
  'https://images.pexels.com/photos/4869123/pexels-photo-4869123.jpeg?cs=srgb&dl=pexels-lucas-meneses-4869123.jpg&fm=jpg',
  'https://images.pexels.com/photos/10611447/pexels-photo-10611447.jpeg?cs=srgb&dl=pexels-yaroslava-borz-10611447.jpg&fm=jpg',
  'https://images.pexels.com/photos/10205821/pexels-photo-10205821.jpeg?cs=srgb&dl=pexels-eugene-liashchevskyi-10205821.jpg&fm=jpg',
]

export default function ImageSlider() {
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
          <Image key={idx} source={{uri: image}} style={styles.image}/>
        )}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {images.map((count, index) => <Text key={index} style={currentIndex === index ? styles.dotActive : styles.dot}> ● </Text>)}
        
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
