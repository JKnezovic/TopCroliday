import * as React from "react";
import { Button, StyleSheet, Text, View, Linking } from "react-native";
import PostStayTile from "./PostStayTile";

const TopCroliday = () => (
  <Text style={{ marginRight: "10%", flexShrink: 1, alignSelf: "center" }}>
    If you liked your experience with TopCroliday and would like to give some
    feedback feel free to leave a review
    <Text
      style={{ color: "blue" }}
      onPress={() => Linking.openURL("https://g.page/r/CfDYgy9-pzo7EAg/review")}
    >
      {" "}
      here
    </Text>
  </Text>
);

const App = () => (
  <Text style={{ marginRight: "10%", flexShrink: 1, alignSelf: "center" }}>
    Help us improve this app and your experience using it by leaving a comment:
  </Text>
);

const PostStay = (props) => {
  return (
    <View style={styles.container}>
      <PostStayTile number={1}>
        <TopCroliday />
      </PostStayTile>
      <PostStayTile number={2}>
        <App />
      </PostStayTile>
    </View>
  );
};

export default PostStay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
