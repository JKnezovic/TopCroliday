import * as React from "react";
import { StyleSheet, Text, Pressable, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RadioButton from "../RadioButton";
import { useNavigation } from "@react-navigation/native";

const ActivitiesTile = ({ item, changeSelection, isSelected }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("AboutActivity", { activityId: item.id })
      }
    >
      <ImageBackground
        source={{ uri: item.get("tileImage").url() }}
        resizeMode="cover"
        style={styles.image}
      >
        <RadioButton
          style={styles.icon}
          changeSelection={changeSelection}
          selected={isSelected}
          color={"white"}
        />
        <LinearGradient
          style={styles.textBox}
          colors={["transparent", "rgba(0,0,0,0.6)"]}
        >
          <Text style={styles.title}>{item.get("Name")}</Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

export default ActivitiesTile;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "45%",
    margin: "1%",
  },
  image: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 15,
  },
  icon: {
    alignSelf: "flex-end",
    marginRight: "4%",
    marginTop: "2%",
  },
  textBox: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "white",
    width: "100%",
    paddingLeft: "8%",
    paddingBottom: "2%",
  },
});
