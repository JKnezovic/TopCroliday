import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const DuringStay = (props) => {
  return (
      <View style={styles.container}>
          <Text>DuringStay</Text>
      </View>
  );
};

export default DuringStay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'

  }
})