import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ActivitiesTile from "./ActivitiesTile";

const Activities = ({
  activities,
  changeSelection,
  selectedActivities,
  setSelection,
}) => {
  const items = activities.map((item) => (
    <ActivitiesTile
      key={item.id}
      item={item}
      changeSelection={() => changeSelection(setSelection, item.id)}
      isSelected={selectedActivities[item.id]}
    />
  ));

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ width: 20, backgroundColor: "#00ac8d" }} />
      <View style={styles.container}>{items}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexWrap: "wrap",
    flexDirection: "row",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  child: {
    flexBasis: "50%",
  },
});

export default Activities;
