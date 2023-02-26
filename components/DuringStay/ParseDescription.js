import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Linking } from "react-native";
import OpenMap from "./OpenMap";

const LinkText = ({ locations }) => {
  if (locations) {
    const values = locations.split(":");
    return (
      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL(
            `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${values[0]}`
          )
        }
      >
        {values[1]}
      </Text>
    );
  }
};

const ParseDescription = (props) => {
  const { description, locations } = props;
  //console.log(locations);
  //const [parsedDescription, setParsedDescription] = useState([]);

  /* useEffect(() => {
    if (description.includes("LocationStart")) {
      let locations = parseLocations(description);
      setParsedDescription(locations);
    } else setParsedDescription([{ description: description }]);
  }, [description]); */

  /*  const parseLocations = (str) => {
    const splitStr = str.split("\n");
    let startIndex = -1;
    let locations = [];

    for (let i = 0; i < splitStr.length; i++) {
      const line = splitStr[i];
      if (line.startsWith("LocationStart")) {
        startIndex = i;
      } else if (line.startsWith("LocationEnd")) {
        const location = splitStr.slice(startIndex + 1, i);
        var longitude = location[1];
        longitude = longitude.substring(9, longitude.length - 9);
        var latitude = location[0];
        latitude = latitude.substring(8, latitude.length - 8);
        var description = generateDescription(location);
        var label = location[2];
        label = label.substring(4, label.length - 4);
        locations.push({ longitude, latitude, description, label });
        startIndex = -1;
      }
    }

    return locations;
  }; */

  /*   const generateDescription = (location) => {
    let description = "";
    for (let i = 3; i < location.length; i++) {
      description = description + "\n" + location[i];
    }
    return description;
  }; */
  const linkifiedText = description.includes("Location")
    ? description.split("Location").map((word, index, array) => {
        return [word, <LinkText key={index} locations={locations[index]} />];
      })
    : description;

  return <Text style={styles.description}>{linkifiedText}</Text>;

  /* return (
    <View>
      {parsedDescription.map((location, index) => (
        <Text
          style={[styles.description, location.latitude && styles.link]}
          key={index}
          onPress={() =>
            OpenMap(location.latitude, location.longitude, location.label)
          }
        >
          {location.description}
        </Text>
      ))}
    </View>
  );*/
};

const styles = StyleSheet.create({
  description: {
    color: "#092240",
    width: "90%",
    alignSelf: "center",
  },
  link: {
    lineHeight: 20,
    color: "#0000EE",
    fontWeight: "bold",
  },
});

export default ParseDescription;
