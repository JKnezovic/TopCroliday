import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { cleaningServices, infoCleaningServices } from "../../../assets/data";
import CleaningServicesOption from "./CleaningServicesOption";
import { FontAwesome } from "@expo/vector-icons";

export default function CleaningServices({
  changeSelection,
  selectedCleaningServices,
  setSelection,
  color,
}) {
  const items = cleaningServices.map((item) => (
    <CleaningServicesOption
      key={item.id}
      item={item}
      changeSelection={() => changeSelection(setSelection, item.id)}
      isSelected={selectedCleaningServices[item.id]}
      color={color}
    />
  ));
  return (
    <View style={styles.container}>
      {items}
      <View style={styles.tile}>
        <View style={styles.iconContainer}>
          <FontAwesome
            style={[styles.icon, { color: color }]}
            name={"info"}
            size={40}
          />
        </View>

        <Text style={styles.text}> {infoCleaningServices}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 5,
  },
  iconContainer: {
    flex: 2,
    padding: 5,
    alignItems: "center",
    marginRight: 5,
  },
  text: {
    flex: 9,
  },
  container: {
    minWidth: "100%",
    paddingHorizontal: "1%",
  },
});
