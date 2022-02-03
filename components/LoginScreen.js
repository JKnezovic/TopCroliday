import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import {UserLogin} from './UserLogin';
import Styles from '../Styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/welcome_background.jpg')} resizeMode="cover" style={styles.image}>
          <View>
            <Image
              source={require('../assets/Logo.png')} style={styles.logo}
            />
            <Text style={[styles.text, styles.bigText]}>Welcome</Text>
            <Text style={[styles.text, styles.description,{marginBottom:20}]}>Enter username and password you recieved</Text>
          </View>
          <UserLogin />
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

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
    alignSelf:"center"
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