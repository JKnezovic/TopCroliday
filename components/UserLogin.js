import React, {useState} from 'react';
import {Alert, TextInput, View} from 'react-native';
import Parse from 'parse/react-native';
import Styles from '../Styles';
import Button from "./Button"

export const UserLogin = (props) => {
  console.log(props)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doUserLogin = async function () {
    const usernameValue = username;
    const passwordValue = password;
    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(() => {
        props.getReservation()
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Username'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={password}
          placeholder={'Password'}
          secureTextEntry
          autoCapitalize={'none'}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
            title={'Sign in'}
            onPress={() => doUserLogin()}
            />
      </View>
  );
};