import React, { useEffect, useState, useContext } from "react";
import {
  Alert,
  StyleSheet,
  View,
  ScrollView,
  ToastAndroid,
} from "react-native";
import PreStayTile from "./PreStayTile";
import {
  prestay,
  foodAndDrink,
  transferServices,
  cleaningServices,
} from "../../assets/data";
import Parse from "parse/react-native.js";
import { useNavigation } from "@react-navigation/native";
import ReservationContext from "../../ReservationContext";
import SubmitModal from "./SubmitModal";

const PreStay = () => {
  const navigation = useNavigation();
  const [prestayMenu, setPrestayMenu] = useState({});
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState({});
  const [selectedFridgeRestock, setSelectedFridgeRestock] = useState({});
  const [selectedTransfer, setSelectedTransfer] = useState({});
  const [selectedCleaningServices, setSelectedCleaningServices] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [populateCompleted, setPopulateCompleted] = useState(false);

  const reservation = useContext(ReservationContext);
  const accommodationType = reservation.get("accommodation").get("Type");

  useEffect(() => {
    populatePrestay(prestay);
    updateAllStates();

    //get activities
    getActivities();
  }, []);
  useEffect(() => {
    if (populateCompleted) updateReservation(reservation);
  }, [
    selectedActivities,
    selectedCleaningServices,
    selectedFridgeRestock,
    selectedTransfer,
  ]);
  const getActivities = async () => {
    let activitiesQuery = new Parse.Query("Activities");
    try {
      let queryResult = await activitiesQuery.find();
      setActivities(queryResult);
      return true;
    } catch (error) {
      Alert.alert("Error!", "Check your internet connection");
      return false;
    }
  };

  const updateAllStates = async () => {
    await Promise.all([populateSelection(reservation)]);
    setPopulateCompleted(true);
  };

  const populateSelection = (reservation) => {
    let choices = reservation.get("choices");
    let tempActivities = {};
    choices["activities"].forEach((item) => (tempActivities[item.id] = true));
    setSelectedActivities(tempActivities);

    let tempcleaningServices = {};
    choices["cleaningServices"].forEach(
      (item) => (tempcleaningServices[item.id] = true)
    );
    setSelectedCleaningServices(tempcleaningServices);

    let tempFridgeRestock = {};
    choices["fridgeRestock"].forEach(
      (item) => (tempFridgeRestock[item.id] = true)
    );
    setSelectedFridgeRestock(tempFridgeRestock);

    let tempTransfer = {};
    choices["transfer"].forEach((item) => (tempTransfer[item.id] = true));
    setSelectedTransfer(tempTransfer);
  };
  const changeSelection = (setSelection, id) => {
    setSelection((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const populatePrestay = (prestay) => {
    let menu = {};
    prestay.forEach((prestayElement) => {
      menu[prestayElement.name] = false;
    });
    setPrestayMenu(menu);
  };
  const collapseItem = (name) => {
    setPrestayMenu((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const submitSelection = () => {
    updateReservation(reservation);
    ToastAndroid.show("Your selection has been saved", ToastAndroid.SHORT);
    navigation.navigate("Main");
  };
  const createChoices = () => {
    const choices = {
      fridgeRestock: fillChoice(foodAndDrink, selectedFridgeRestock),
      cleaningServices: fillChoice(cleaningServices, selectedCleaningServices),
      transfer: fillChoice(transferServices, selectedTransfer),
      activities: fillChoice(activities, selectedActivities, "activities"),
    };
    return choices;
  };
  const fillChoice = (items, selected, type = "") => {
    let choice = [];
    items.forEach((item) => {
      if (selected[item.id]) {
        type === "activities"
          ? choice.push({ id: item.id, name: item.get("Name") })
          : choice.push(item);
      }
    });
    return choice;
  };
  const updateReservation = async function (reservation) {
    let Reservation = new Parse.Object("Reservation");
    Reservation.set("objectId", reservation.id);
    let choices = createChoices();
    choices.fridgeRestock.forEach((x) => console.log(x.id));
    console.log("-------------");
    Reservation.set("choices", choices);
    try {
      await Reservation.save();
    } catch (error) {
      Alert.alert("Error!", error.message);
    }
  };

  const items = prestay.map((value) => {
    if (
      accommodationType !== "Villa" &&
      (value.name === "Food and drink" || value.name === "Cleaning Services")
    )
      return null;
    else
      return (
        <PreStayTile
          item={value}
          key={value.key}
          isCollapsed={prestayMenu[value.name]}
          collapseItem={collapseItem}
          changeSelection={changeSelection}
          setSelection={{
            setSelectedActivities,
            setSelectedCleaningServices,
            setSelectedFridgeRestock,
            setSelectedTransfer,
          }}
          activities={activities}
          selectedItems={{
            selectedFridgeRestock,
            selectedActivities,
            selectedTransfer,
            selectedCleaningServices,
          }}
        />
      );
  });
  return (
    <View style={{ flex: 1 }}>
      <SubmitModal
        isVisible={modalVisible}
        submit={submitSelection}
        setModalVisible={setModalVisible}
      />

      <ScrollView contentContainerStyle={styles.container}>{items}</ScrollView>
    </View>
  );
};

export default PreStay;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: "30%",
  },
  button: {
    position: "absolute",
    bottom: 30,
  },
});
