import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function RadioButton(props) {
  return (
    <Pressable onPress={props.changeSelection}>
      {!props.selected ? (
        <View
          style={[
            styles.radioButtonOuter,
            props.style,
            props.selected
              ? props.color === "white"
                ? styles.whiteGreenOuter
                : styles.greenOuter
              : props.color === "white"
              ? styles.whiteOuter
              : styles.blackOuter,
          ]}
        ></View>
      ) : (
        <Feather
          style={[
            props.style,
            {
              backgroundColor: "#fff",
              opacity: 0.8,
              borderRadius: 12,
              overflow: "hidden",
            },
          ]}
          name="check-circle"
          size={25}
          color="green"
        />
      )}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  radioButtonOuter: {
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 2,
  },
  blackOuter: {
    borderColor: "#000",
  },
  greenOuter: {
    borderColor: "#09814a",
  },
  whiteOuter: {
    borderColor: "black",
    backgroundColor: "#fff",
    opacity: 0.8,
  },
  whiteGreenOuter: {
    borderColor: "#09814a",
    backgroundColor: "#fff",
    opacity: 0.8,
  },
  radioButtonInner: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#09814a",
  },
});
