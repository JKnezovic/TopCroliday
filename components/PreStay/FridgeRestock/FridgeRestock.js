import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { foodAndDrink } from "../../../assets/data";
import FridgeRestockTile from "./FridgeRestockTile";
import { Entypo } from "@expo/vector-icons";
import { infoFridgeAndRestock } from "../../../assets/data";

export default function FridgeRestock({
  changeSelection,
  selectedFridgeRestock,
  setSelection,
  color,
}) {
  const items = foodAndDrink.map((item) => (
    <FridgeRestockTile
      item={item}
      key={item.id}
      changeSelection={() => changeSelection(setSelection, item.id)}
      selectedFridgeRestock={selectedFridgeRestock}
      setSelection={setSelection}
      isSelected={selectedFridgeRestock[item.id]}
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

        <Text style={styles.text}>{infoFridgeAndRestock}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    paddingBottom: 1,
  },
  tile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
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
});
