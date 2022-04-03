import { getObjectStateController } from 'parse/lib/browser/CoreManager';
import React, { useState } from 'react'
import {  View, Image, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window')
const height = width * 0.6;



export default function ImageSlider({images, description}) {
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
        {images.map((imageObject, idx) =>
        <View key={idx}>
            {imageObject.description && <Text style={styles.text}>{imageObject.description}</Text>}
            <Image key={idx} source={{uri: imageObject.image.url()}} style={styles.image}/>

        </View>
        )}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {images.map((image, index) => <Text key={index} style={currentIndex === index ? styles.dotActive : styles.dot}> ● </Text>)}
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: 0,
    elevation: 2,
    color: 'white',
    backgroundColor: '#092240',
    margin: '1%',
    paddingHorizontal: '5%',
    textAlign: 'center',
    borderRadius: 50
  },
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
