import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import OpenMap from "./OpenMap";

const ParseDescription = (props) => {
  const { description } = props;
  const [parsedDescription, setParsedDescription] = useState([]);

  useEffect(() => {
    if (description.includes("LocationStart")) {
      let locations = parseLocations(description);
      setParsedDescription(locations);
    } else setParsedDescription([{ description: description }]);
  }, [description]);

  const parseLocations = (str) => {
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
  };

  const generateDescription = (location) => {
    let description = "";
    for (let i = 3; i < location.length; i++) {
      description = description + "\n" + location[i];
    }
    return description;
  };

  return (
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
  );
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
