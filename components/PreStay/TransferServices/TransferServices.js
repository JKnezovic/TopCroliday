import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { infoTransfer } from "../../../assets/data";
import { Entypo } from "@expo/vector-icons";

export default function TransferServices({ color }) {
  return (
    <View style={styles.container}>
      <View style={[styles.tile, { borderLeftColor: color }]}>
        <View style={styles.iconContainer}>
          <Entypo
            style={[styles.icon, { color: "#c99a00" }]}
            name={"info"}
            size={30}
          />
        </View>
        <View style={styles.text}>
          <Text style={{ fontStyle: "italic" }}>
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
    paddingRight: 20,
    paddingVertical: 5,
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
