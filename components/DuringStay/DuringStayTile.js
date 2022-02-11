import * as React from 'react';
import {  StyleSheet,View, Text, Pressable, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const DuringStayTile = ({item,saveFavoriteList}) => {
  const { title, uri } = item;
  const [favorite,setFavorite] = React.useState(false);
  const settFavorite=()=>{
    setFavorite(!favorite)
  }
  return (
    <Pressable onPress={()=>saveFavoriteList()} style={styles.container}>
        <ImageBackground source={uri} resizeMode="cover" style={styles.image}>
              { favorite ?
                (<AntDesign onPress={()=>settFavorite()} style={styles.icon} name="heart" size={24} color="black" />)
                :
                (<AntDesign onPress={()=>settFavorite()} style={styles.icon} name="hearto" size={24} color="black" />) 
              }
              <LinearGradient 
              style={styles.textBox}
              colors={['transparent','rgba(0,0,0,0.6)']}>
                <Text style={styles.title}>
                  {title} 
                </Text>
              </LinearGradient>
        </ImageBackground>
    </Pressable>
  );
};

export default DuringStayTile;

const styles = StyleSheet.create({
  container: {
    height:115,
    width: '48%',
/*     shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2, */
  },
  image: {
    flex: 1,
    overflow:'hidden',
    borderRadius:15,
  },
  icon:{
    alignSelf:'flex-end',
    paddingRight:'4%',
    paddingTop:'2%',
    //color:'red'
  },
  textBox:{
    //flex:1,
    position:'absolute',
    //right:0,
    bottom:0,
    width:'100%'
  },
  title: {
    flex:1,
    fontSize: 16,
    color:'white',
    width:'100%',
    paddingLeft:'8%',
    paddingBottom:'2%'
  },
});

