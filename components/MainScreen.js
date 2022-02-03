import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreenTile from './MainScreenTiles';

const images = {
  pre: require('../assets/pre.jpg'),
  post: require('../assets/post.jpg'),
  during: require('../assets/during.jpeg')
}

const MainScreen = () => {
  return (
      <View style={styles.container}>
      <MainScreenTile imageUri={images.pre} title={"Pre Stay"}></MainScreenTile>
      <MainScreenTile imageUri={images.during} title={"During Stay"}></MainScreenTile>
      <MainScreenTile imageUri={images.post} title={"Post Stay"}></MainScreenTile>
  
      </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    alignItems:'center'
  },
});
