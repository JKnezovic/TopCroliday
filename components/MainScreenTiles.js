import * as React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, ToastAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';


const MainScreenTile = ({item,endDate}) => {
  const {desc, title, uri} = item;
  const navigation = useNavigation();
  
  const handlePress=()=>{
    const date = new Date()
    if(title==="PostStay" && (date.getTime() < endDate.getTime()))
    {
      ToastAndroid.show('Once your trip ends here you will be able to give us your feedback', ToastAndroid.LONG);
    }
    else navigation.navigate(title)
  }

  return (
      <Pressable style={styles.container} onPress={() => handlePress()}>
          <ImageBackground source={uri} resizeMode="cover" style={styles.image}>
              <LinearGradient 
              style={styles.textBox}
              colors={['transparent','rgba(0,0,0,0.6)']}>
                <Text style={styles.textBig}>
                  {title} 
                  <AntDesign name="right" size={30} color="white" />
                </Text>
                <Text style={styles.desc}>{desc}</Text>
              </LinearGradient>
          </ImageBackground>
      </Pressable>
  );
};

export default MainScreenTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'95%',
    paddingVertical: 6,
    marginBottom: 6,
  },
  image: {
    flex: 1,
    borderRadius:15,
    overflow:'hidden'
  },
  textBox:{
    position:'absolute',
    right:0,
    bottom:0,
    width:'100%'

  },
  textBig:{
    fontSize: 42,    
    color:'white',
    textAlign:'right',
    paddingRight:'2%'
  },
  desc:{
    fontSize:12,    
    color:'white',
    paddingLeft:'2%',
    paddingBottom:'2%'
  }

});
