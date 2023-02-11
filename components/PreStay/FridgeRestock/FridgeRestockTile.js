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
    <Pressable style={styles.tile} onPress={() => setModalVisible(true)}>
      <FridgeRestockModal
        isVisible={modalVisible}
        title={item.name}
        description={item.description}
        price={item.price}
        setModalVisible={setModalVisible}
      />
      <View style={styles.iconContainer}>
        <Icon
          style={[styles.icon, { color: color }]}
          name={item.iconName}
          size={50}
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
