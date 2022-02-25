import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Name_holder' } = props;
  return (
    <Pressable style={[styles.button, props.style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    width:"80%",
    elevation: 3,
    backgroundColor: '#c99a00',

  },
  text: {
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: 'white',
  },
});