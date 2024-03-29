import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import RadioButton from "../RadioButton";
import FridgeRestockModal from "./Modal";

export default function FridgeRestockTile({
  item,
  changeSelection,
  isSelected,
  color,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const Icons = {
    MaterialIcons: MaterialIcons,
    Ionicons: Ionicons,
    FontAwesome: FontAwesome,
    FontAwesome5: FontAwesome5,
    MaterialCommunityIcons: MaterialCommunityIcons,
  };

  const Icon = Icons[item.iconBank];

  const showPreview = (description) => {
    if (description.length > 80) return description.substring(0, 50) + "...";
    return description;
  };

  return (
    <Pressable
      style={[styles.tile, { borderLeftColor: color }]}
      onPress={() => setModalVisible(true)}
    >
      <FridgeRestockModal
        isVisible={modalVisible}
        title={item.name}
        description={item.description}
        price={item.price}
        setModalVisible={setModalVisible}
        isSelected={isSelected}
        changeSelection={changeSelection}
      />
      <View style={styles.iconContainer}>
        <Icon
          style={[styles.icon, { color: color }]}
          name={item.iconName}
          size={40}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.bigText}>{item.name}</Text>
        <Text style={styles.smallText}>{showPreview(item.description)}</Text>
      </View>

      <View style={styles.radioView}>
        <RadioButton
          style={styles.radioButton}
          changeSelection={changeSelection}
          selected={isSelected}
        />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  bigText: {
    fontWeight: "500",
  },
  smallText: {
    color: "gray",
  },
  tile: {
    borderLeftWidth: 20,
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
  textContainer: {
    flex: 8,
  },
  radioView: {
    flex: 1,
    marginHorizontal: 5,
  },
});
