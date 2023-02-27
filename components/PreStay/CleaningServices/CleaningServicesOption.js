import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioButton from "../RadioButton";
import { MaterialIcons } from "@expo/vector-icons";

export default function CleaningServicesOption({
  item,
  changeSelection,
  isSelected,
  color,
}) {
  return (
    <View style={[styles.tile, { borderLeftColor: color }]}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          style={[styles.icon, { color: color }]}
          name={item.iconName}
          size={40}
        />
      </View>

      <Text style={styles.textContainer}>{item.option}</Text>

      <RadioButton
        style={styles.radioView}
        changeSelection={changeSelection}
        selected={isSelected}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  tile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderLeftWidth: 20,
    paddingVertical: 5,
    //marginVertical: 2,
  },
  iconContainer: {
    flex: 2,
    padding: 5,
    alignItems: "center",
    marginRight: 5,
  },
  textContainer: {
    flex: 8,
  },
  radioView: {
    marginHorizontal: 5,
  },
});
