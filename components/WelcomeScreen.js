import * as React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import Button from "./Button"



const WelcomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/welcome_background.jpg')} resizeMode="cover" style={styles.image}>
            <Image
              source={require('../assets/Logo.png')} style={styles.logo}
            />
            <Text style={[styles.text, styles.bigText]}>TOP CROLIDAY</Text>
            <Text style={[styles.text, styles.description]}>Welcome to the Top Croliday application, whose goal is to make your experience as memorable as possible!</Text>
            <Text style={[styles.text, styles.description,{marginBottom:20}]}>Let us help you organize and tailor your ideal vacation you deserve.</Text>

            <Button
            title={"Let's go"}
            onPress={() =>
              navigation.navigate('Login')
            }
            />
        </ImageBackground>
      </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  logo:{
    justifyContent:"center",
    alignSelf:"center",
    width:120,
    height:140
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  description:{
    width:"90%",
    alignSelf:'center'
  },
  bigText: {
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold'
  }
});
