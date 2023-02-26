import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FAQdata } from "../../assets/data";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handlePress = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const renderAnswer = (answer) => {
    const regex = /(https?:\/\/[^\s]+)/g;
    const answerParts = answer.split(regex);

    const answerElements = answerParts.map((part, index) => {
      if (part.match(regex)) {
        return (
          <Text
            key={index}
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={() => handleLinkPress(part)}
          >
            {part.includes("app") ? "Promet Split" : part}
          </Text>
        );
      } else {
        return <Text key={index}>{part}</Text>;
      }
    });

    return answerElements;
  };

  return (
    <ScrollView style={styles.container}>
      {FAQdata.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.question}>{item.question}</Text>
            {expanded === index ? (
              <Ionicons
                name="caret-up-circle-outline"
                size={24}
                color="black"
              />
            ) : (
              <Ionicons
                name="caret-down-circle-outline"
                size={24}
                color="black"
              />
            )}
          </TouchableOpacity>
          {expanded === index && renderAnswer(item.answer)}
          <View style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    width: "99%",
    height: 1,
    backgroundColor: "lightgray",
    marginTop: 10,
  },
  itemContainer: {
    marginVertical: 8,
  },
  question: {
    fontWeight: "bold",
    fontSize: 15,
    maxWidth: "90%",
  },
  answer: {
    marginTop: 8,
    fontSize: 15,
  },
});

export default FAQ;
