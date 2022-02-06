import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const PreStay = (props) => {
  return (
      <View style={styles.container}>
          <Text>PreStay</Text>
      </View>
  );
};

export default PreStay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
})