import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const ChoicesTile = ({ color, name, data }) => {
  const items = data?.map((value, key) => (
    <Text key={key}>
      {"\u2022" + (value.option ? value.option : value.name)}
    </Text>
  ));
  return (
    <View style={styles.tile}>
      <View style={[styles.divider, { backgroundColor: color }]} />
      <Text style={{ alignSelf: "flex-end", color: color, paddingRight: "5%" }}>
        {name}
      </Text>
      <View style={{ paddingLeft: "5%" }}>{items}</View>
    </View>
  );
};

export default ChoicesTile;

const styles = StyleSheet.create({
  divider: {
    width: "90%",
    height: 3,
    alignSelf: "center",
  },
  tile: {
    borderRadius: 9,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    paddingVertical: 10,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
});
