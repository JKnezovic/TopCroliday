import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { cleaningServices, infoCleaningServices } from "../../../assets/data";
import CleaningServicesOption from "./CleaningServicesOption";
import { Entypo } from "@expo/vector-icons";

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
      <View style={[styles.tile, { borderLeftColor: color }]}>
        <View style={styles.iconContainer}>
          <Entypo
            style={[styles.icon, { color: "#c99a00" }]}
            name={"info"}
            size={30}
          />
        </View>

        <Text style={styles.text}>{infoCleaningServices}</Text>
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
    borderLeftWidth: 20,
  },
  iconContainer: {
    flex: 2,
    padding: 5,
    alignItems: "center",
    marginRight: 5,
  },
  text: {
    flex: 9,
    paddingRight: 20,
    fontSize: 13,
    fontStyle: "italic",
  },
  container: {
    minWidth: "100%",
  },
});
