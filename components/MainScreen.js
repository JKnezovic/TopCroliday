import * as React from 'react';
import { StyleSheet, View, BackHandler, Alert } from 'react-native';
import MainScreenTile from './MainScreenTiles';
import Parse from "parse/react-native.js";
import {mainscreen} from "../assets/data"
import {useNavigation} from '@react-navigation/native';
import ReservationContext from '../ReservationContext';



const MainScreen = () => {
  const navigation = useNavigation();
  const reservation = React.useContext(ReservationContext)


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

  const backAction = () => {
    if (navigation.isFocused()) {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => doUserLogOut() }
    ]);
    return true;
  }
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {backHandler.remove()};
  }, []);

  const items=mainscreen.map((value)=>
  <MainScreenTile item={value} key={value.key} endDate={reservation.get('endDate')} />) 

  return (
      <View style={styles.container}>
        {items}
      </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems:'center'
  },
});
