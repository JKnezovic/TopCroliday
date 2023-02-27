import React, { useState, useEffect, useContext } from "react";
import {
  Alert,
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import ImageSlider from "./ImageSlider";
import Parse from "parse/react-native.js";
import Button from "../../Button";
import ReservationContext from "../../../ReservationContext";
import { useNavigationState } from "@react-navigation/native";

export default function AboutActivity({ setReservation }) {
  const reservation = useContext(ReservationContext);

  const [activity, setActivity] = useState(null);
  const [images, setImages] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const state = useNavigationState((state) => state);
  useEffect(() => {
    if (state) {
      let route = state.routes.find((x) => x.name === "AboutActivity");
      getActivity(route.params.activityId);
      if (route.params.isSelected) setIsSelected(route.params.isSelected);
      else setIsSelected(false);
    }
  }, [state]);

  const updateReservation = async function () {
    setIsSelected(!isSelected);
    let Reservation = new Parse.Object("Reservation");
    Reservation.set("objectId", reservation.id);
    let choices = reservation.get("choices");
    addOrRemoveObjectFromArray(choices.activities, {
      id: activity.id,
      name: activity.get("Name"),
    });
    Reservation.set("choices", choices);
    try {
      let reservation = await Reservation.save();
      setReservation(reservation);
    } catch (error) {
      Alert.alert("Error!", error.message);
    }
  };

  function addOrRemoveObjectFromArray(arr, obj) {
    const index = arr.findIndex((item) => item.id === obj.id);
    if (index === -1) {
      // Object doesn't exist in array, add it
      arr.push(obj);
    } else {
      // Object already exists in array, remove it
      arr.splice(index, 1);
    }
  }

  const getActivity = async (activityId) => {
    const activityQuery = new Parse.Query("Activities");
    activityQuery.equalTo("objectId", activityId);
    const imagesQuery = new Parse.Query("Images");
    imagesQuery.matchesQuery("activityPointer", activityQuery);
    try {
      let joinedResults = await imagesQuery.find();
      let tempImages = [];
      joinedResults.forEach((element) => {
        tempImages.push({
          image: element.get("image"),
          description: element.get("description"),
        });
      });
      setImages(tempImages);
      setActivity(joinedResults[0].get("activityPointer"));
      return true;
    } catch (error) {
      console.log("Error!", error.message);
      Alert.alert("Error!", "Check your internet connection");
      return false;
    }
  };
  if (activity && images)
    return (
      <View style={styles.container}>
        <ImageSlider images={images} />
        {activity && (
          <>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.title}> {activity.get("Name")}</Text>
              <Text style={styles.description}>
                {activity.get("description")}
              </Text>
            </ScrollView>
            <Button
              style={{ position: "absolute", bottom: 30 }}
              small
              icon={isSelected}
              title={"I'm interested "}
              onPress={() => updateReservation()}
            />
          </>
        )}
      </View>
    );
  else
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#092240" />
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  divider: {
    width: "90%",
    height: 2,
    alignSelf: "center",
  },
  scrollView: {
    flex: 1,
  },
  title: {
    color: "#092240",
    fontSize: 26,
    paddingLeft: "5%",
    lineHeight: 84,
  },
  description: {
    color: "#092240",
    width: "90%",
    alignSelf: "center",
    lineHeight: 20,
    paddingBottom: 100,
  },
  text: {
    width: "90%",
    alignSelf: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
