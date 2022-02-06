import * as React from 'react';
import { StyleSheet, View, BackHandler, Alert } from 'react-native';
import MainScreenTile from './MainScreenTiles';
import Parse from "parse/react-native.js";

const data = {
  pre: {
    uri:require('../assets/pre.jpg'),
    title: 'PreStay',
    desc: 'Here you can explore and pick all the top activities you would like to try and other services you may need.'
  },
  during: {
    uri: require('../assets/during.jpeg'),
    title: 'DuringStay',
    desc: 'Take a look at some sights worth exploiting, restaurants, beaches, museums and galleries worth visiting.'
  },
  post: {
    uri: require('../assets/post.jpg'),
    title: 'PostStay',
    desc: 'Tell us how did you like your accommodation as well as was this app any helpful to you?'
  }
}

const MainScreen = () => {
  const [reservation, setReservation] = React.useState(null);

  const getReservation = async function () {
    const parseQuery = new Parse.Query('Reservation');
    const currentUser = await Parse.User.currentAsync();
    parseQuery.equalTo('user',currentUser);
    parseQuery.include('accommodation');

    try {
      let reservations = await parseQuery.first();
      setReservation(reservations);
      //setLocation(reservations.get("location"));
      //setAccommodationType(reservations.get("accommodation").get("Type"));

      //parseQuery.equalTo('locations',location);
      //let activities = await activitiesQuery.find();
      //setQueryResults(activities);
      //console.log(activities);
    } catch (error) {
      Alert.alert('Error!', error.message);
    }
  };

  React.useEffect(() => {
    getReservation()
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
        <MainScreenTile imageUri={data.pre.uri} title={data.pre.title} desc={data.pre.desc} reservation={reservation}></MainScreenTile>
        <MainScreenTile imageUri={data.during.uri} title={data.during.title} desc={data.during.desc} reservation={reservation}></MainScreenTile>
        <MainScreenTile imageUri={data.post.uri} title={data.post.title} desc={data.post.desc} reservation={reservation}></MainScreenTile>
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
