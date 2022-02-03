import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const MainScreenTile = (props) => {
  return (
      <View style={styles.container}>
          <ImageBackground source={props.imageUri} resizeMode="cover" style={styles.image}>
            <Text>{props.title}</Text>
          </ImageBackground>
      </View>
  );
};

export default MainScreenTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'95%',
    paddingVertical: 6,
    // borderRadius: 50,
    marginBottom: 6,
  },
  image: {
    flex: 1,
    borderRadius:15,
    overflow:'hidden'

   
  },
});
