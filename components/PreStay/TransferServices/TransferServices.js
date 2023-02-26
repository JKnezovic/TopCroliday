import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { transferServices, infoTransfer } from "../../../assets/data";
import { FontAwesome } from "@expo/vector-icons";

export default function TransferServices({ color }) {
  return (
    <View style={styles.container}>
      <View style={[styles.tile, { borderLeftColor: color }]}>
        <View style={styles.iconContainer}>
          <FontAwesome
            style={[styles.icon, { color: color }]}
            name={"info"}
            size={40}
          />
        </View>
        <View style={styles.text}>
          <Text>
            {infoTransfer.description}
            <Text
              onPress={() => Linking.openURL(`tel:${infoTransfer.phoneNumber}`)}
              style={styles.phoneNumber}
            >
              {infoTransfer.phoneNumber}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
  },
  text: {
    flexDirection: "column",
    flex: 9,
  },
  phoneNumber: {
    color: "blue",
  },
  tile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderLeftWidth: 20,
  },
  iconContainer: {
    flex: 2,
    padding: 5,
    alignItems: "center",
    marginRight: 5,
  },
});
