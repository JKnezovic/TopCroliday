import * as React from 'react';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import MainScreenTile from './MainScreenTiles';
import Parse from "parse/react-native.js";

const data = {
  pre: {
    uri:require('../assets/pre.jpg'),
    title: 'Pre Stay',
    desc: 'Here you can explore and pick all the top activities you would like to try and other services you may need.'
  },
  post: {
    uri: require('../assets/post.jpg'),
    title: 'During Stay',
    desc: 'Take a look at some sights worth exploiting, restaurants, beaches, museums and galleries worth visiting.'
  },
  during: {
    uri: require('../assets/during.jpeg'),
    title: 'Post Stay',
    desc: 'Tell us how did you like your accommodation as well as was this app any helpful to you?'
  }
}

const MainScreen = () => {
  React.useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => doUserLogOut() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    const doUserLogOut = async function () {
      return await Parse.User.logOut()
        .then(async () => {
          const currentUser = await Parse.User.currentAsync();
          if (currentUser === null) {
            BackHandler.exitApp()
          }
        })
        .catch((error) => {
          Alert.alert('Error!', error.message);
          return false;
        });
    };

    return () => backHandler.remove();
  }, []);
  return (
      <View style={styles.container}>
        <MainScreenTile imageUri={data.pre.uri} title={data.pre.title} desc={data.pre.desc}></MainScreenTile>
        <MainScreenTile imageUri={data.during.uri} title={data.during.title} desc={data.during.desc}></MainScreenTile>
        <MainScreenTile imageUri={data.post.uri} title={data.post.title} desc={data.post.desc}></MainScreenTile>
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
