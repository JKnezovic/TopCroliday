import React, { useState, useEffect } from "react";
import {
  Alert,
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Linking,
} from "react-native";
import ImageSlider from "./ImageSlider";
import Parse from "parse/react-native.js";

export default function AboutActivity({ route }) {
  const [activity, setActivity] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getActivity(route.params.activityId);
  }, []);
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
          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}> {activity.get("Name")}</Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                width: "90%",
                alignSelf: "center",
                paddingBottom: "8%",
                color: "black",
              }}
            >
              {activity.get("Note")}
            </Text>
            <Text style={styles.description}>
              {activity.get("description")}
            </Text>

            <View style={[styles.divider, { backgroundColor: "lightgrey" }]} />
          </ScrollView>
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
