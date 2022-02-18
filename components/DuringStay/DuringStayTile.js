import * as React from 'react';
import {  StyleSheet, Text, Pressable, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DuringStayTile = ({source,title,objectId,updateFavoriteList,favoriteList,showFavorites}) => {
  const [favorite,setFavorite] = React.useState(false);

  const navigation = useNavigation(); 
  
  const changeFavorite=()=>{
    updateFavoriteList(objectId,!favorite)
    setFavorite(!favorite)
  }

  React.useEffect(()=>{
    if(favoriteList.hasOwnProperty(objectId)){
      setFavorite(favoriteList[objectId])
    }
  },[]);
  if(showFavorites && !favorite){
    return null
  }
  else{
     return (
    <Pressable onPress={() =>
      navigation.navigate('DuringStayDetails',{objectId:objectId})
    } style={styles.container}>
        <ImageBackground source={source} resizeMode="cover" style={styles.image}>
              { favorite ?
                (<AntDesign onPress={()=>changeFavorite()} style={styles.icon} name="heart" size={24} color="black" />)
                :
                (<AntDesign onPress={()=>changeFavorite()} style={styles.icon} name="hearto" size={24} color="black" />) 
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
  }

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
  },
  textBox:{
    position:'absolute',
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

