import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const data = [
    {
      question: "What is React Native?",
      answer:
        "React Native is a framework for building native mobile apps using React.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is a FlatList?",
      answer:
        "A FlatList is a component in React Native for rendering a scrolling list of items.",
    },
  ];

  const handlePress = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
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
          {expanded === index && (
            <Text style={styles.answer}>{item.answer}</Text>
          )}
          <View style={styles.divider} />
        </View>
      ))}
    </View>
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
  },
  answer: {
    marginTop: 8,
    fontSize: 15,
  },
});

export default FAQ;
