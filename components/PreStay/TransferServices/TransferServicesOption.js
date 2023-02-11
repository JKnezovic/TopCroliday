import React from "react";
import RadioButton from "../RadioButton";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TransferServicesOption({
  item,
  changeSelection,
  isSelected,
  color,
}) {
  return (
    <View style={styles.tile}>
      <View style={styles.iconContainer}>
        <FontAwesome5
          style={[styles.icon, { color: color }]}
          name={item.iconName}
          size={40}
        />
      </View>

      <Text style={styles.textContainer}>{item.option}</Text>

      <View style={styles.radioView}>
        <RadioButton
          style={styles.radioButton}
          changeSelection={changeSelection}
          selected={isSelected}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 2,
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
    flex: 1,
    marginLeft: 5,
  },
});
