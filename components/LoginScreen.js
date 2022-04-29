import React,{useState} from 'react';
import {ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import {UserLogin} from './UserLogin';
import Styles from '../Styles';

const LoginScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/welcome_background.jpg')} resizeMode="cover" style={styles.image}>
        {isLoading&& <View style={{backgroundColor:'white',opacity:0.6,position:'absolute',height:'100%',width:'100%',justifyContent:'center'}}><ActivityIndicator size="large" color="#092240" style={{alignSelf:'center'}}/></View>}
          <View>
            <Image
              source={require('../assets/Logo.png')} style={styles.logo}
            />
            <Text style={[styles.text, styles.bigText]}>Welcome</Text>
            <Text style={[styles.text, styles.description,{marginBottom:20}]}>Enter username and password you recieved</Text>
          </View>
          <UserLogin setIsLoading={setIsLoading} getReservation={props.getReservation}/>
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