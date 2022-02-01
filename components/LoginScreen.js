import * as React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {UserLogin} from './UserLogin';
import Styles from '../Styles';

const LoginScreen = () => {
  return (
    <>
    <StatusBar />
    <SafeAreaView style={Styles.login_container}>
      <View style={Styles.login_header}>
        <Image
          style={Styles.login_header_logo}
          source={require('../assets/Logo.png')}
        />
        <Text style={Styles.login_header_text}>
          <Text style={Styles.login_header_text_bold}>
            {'React Native on Back4App - '}
          </Text>
          {' User login'}
        </Text>
      </View>
      <UserLogin />
    </SafeAreaView>
  </>
  );
};

export default LoginScreen;

