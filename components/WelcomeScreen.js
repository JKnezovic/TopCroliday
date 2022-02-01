import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const WelcomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
      <Text>Welcome to the Top Croliday application, whose goal is to make your experience as memorable as possible!</Text>
      <Button
       title='Lets Go'
       onPress={() =>
        navigation.navigate('Login')
      }
      />
      </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
