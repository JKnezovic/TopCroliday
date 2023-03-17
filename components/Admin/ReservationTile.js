import * as React from "react";
import { Pressable, StyleSheet, Share, View, Text } from "react-native";
import ChoicesTile from "./ChoicesTile";

const ReservationTile = ({
  name,
  startDate,
  endDate,
  accommodation,
  choices,
  username,
  password,
}) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hi!
        Thank you for booking with us. As our guest, we send you a link of our Top Croliday App.
        The App helps you in designing your perfect holiday by providing you with information and services before, during and after your stay.
        Android: https://play.google.com/store/apps/details?id=com.eondevelopers.topcroliday
        IOS: https://apps.apple.com/us/app/topcroliday/id6446034019
        USERNAME: ${username}
        PASSWORD: ${password}
        `,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Pressable
      onPress={() => setModalVisible(!modalVisible)}
      onLongPress={() => onShare()}
      style={styles.container}
    >
      <View style={{ width: "100%" }}>
        <Text style={styles.title}>{name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            paddingBottom: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#092240" }}>
            {accommodation}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text>
              {startDate.toLocaleDateString("en-US").toString() + " - "}
            </Text>
            <Text>{endDate.toLocaleDateString("en-US").toString()}</Text>
          </View>
        </View>
        {modalVisible && (
          <View>
            <ChoicesTile
              color={"#007d8c"}
              name={"Activities"}
              data={choices?.activities}
            ></ChoicesTile>
            <ChoicesTile
              color={"#00ac8d"}
              name={"Transfer"}
              data={choices?.transfer}
            ></ChoicesTile>
            <ChoicesTile
              color={"#004e70"}
              name={"Food & Drinks"}
              data={choices?.fridgeRestock}
            ></ChoicesTile>
            <ChoicesTile
              color={"#007d8c"}
              name={"Cleaning"}
              data={choices?.cleaningServices}
            ></ChoicesTile>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default ReservationTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "95%",
    marginTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    marginBottom: 15,
    textAlign: "center",
    width: "100%",
    backgroundColor: "#092240",
    color: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 5,
    fontWeight: "bold",
  },
});
