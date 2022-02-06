import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const PostStay = (props) => {
  return (
      <View style={styles.container}>
          <Text>PostStay</Text>
      </View>
  );
};

export default PostStay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
})