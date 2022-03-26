import React, { useState, useEffect, Profiler } from "react";
import { Alert, Button as RNButton, StyleSheet, TextInput, View, Text,ScrollView } from "react-native";
import Parse from "parse/react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import Button from "../Button";

const AddReservation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reservationName, setReservationName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedAccomodationType, setSelectedAccomodationType] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [accommodations, setAccommodations] = useState([]);
  const [locations, setLocations] = useState([]);

  const QueryObjects= async function () {
    const locationQuery = new Parse.Query('Location');
    const accommodationQuery = new Parse.Query('Accommodation');

    try {
      let locationResult = await locationQuery.find();
      setLocations(locationResult)
      let accommodationResult = await accommodationQuery.find();
      setAccommodations(accommodationResult)
    } catch (error) {
      console.log('Error!', error.message);
    }
  }

  const locationItems=locations.map((value)=>
  <Picker.Item label={value.get('Name')} value={value} key={value.id} />) 

  const accommodationItems=accommodations.map((value)=>
  <Picker.Item label={value.get('Name')} value={value}  key={value.id} />) 

  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    switch (mode){
        case "start": setStartDate(currentDate) 
            break;
        case 'end' : setEndDate(currentDate)
            break;
        default: console.log("nope")
    }
  };


  const doSubmit = async function () {
    const usernameValue = username;
    const passwordValue = password;
    const nameValue = reservationName;
    const startDateValue = startDate;
    const endDateValue = endDate;
    const accomodationValue = selectedAccomodationType;
    const locationValue = selectedLocation;

    const Reservation = new Parse.Object('Reservation')
    Reservation.set('startDate',startDateValue);
    Reservation.set('endDate',endDateValue);
    Reservation.set('location',locationValue);
    Reservation.set('accommodation',accomodationValue);
    Reservation.set('name',nameValue);



    const params = {
      username: usernameValue,
      password: passwordValue
    };
      return await Parse.Cloud.run('registerUser',params,)
      .then(async(resultObject)=> {
        Reservation.set('user',resultObject.result)
        await Reservation.save();
        Alert.alert("Successfully added");
        return true;
      })
      .catch((error) => {
        Alert.alert("Error!", error.message);
        return false;
      });
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showStartDatepicker = () => {
    showMode('start');
  };

  const showEndDatepicker = () => {
    showMode('end');
  };

  useEffect(()=>{
    QueryObjects()
  },[])

  return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection:'row', marginTop:20,backgroundColor:'white', paddingVertical:5,alignItems:'center'}}>
        <Text style={{flex:1,paddingLeft:10}}>{"Reservation Name:"}</Text>
        <TextInput 
        style={styles.input}
        value={reservationName}
        placeholder={"Name"}
        onChangeText={(text) => setReservationName(text)}
        autoCapitalize={"none"}
      />
      </View>
      <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-around', backgroundColor:'white', paddingVertical:5, alignItems:'center'}}>
          <Text >{"Start Date:"}</Text>
        <RNButton color={'#c99a00'} style={{flex:1}} onPress={showStartDatepicker} title={(startDate.toLocaleDateString("en-US")).toString()} />
        <Text>{"End Date:"}</Text>
        <RNButton color={'#c99a00'} style={{flex:1}} onPress={showEndDatepicker} title={(endDate.toLocaleDateString("en-US")).toString()} />
      </View>
      {show && (
        <DateTimePicker
          value={startDate}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    <View style={{flexDirection:'row', marginTop:20, backgroundColor:'white', paddingVertical:5, alignItems:'center'}}>
        <Text style={{flex:1,paddingLeft:10}} >{"Select Accomodation:"}</Text>
        <Picker style={styles.defaultPicker}
            selectedValue={selectedAccomodationType}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedAccomodationType(itemValue)
            }>
            {accommodationItems}
        </Picker>
      </View>
      <View style={{flexDirection:'row', marginTop:20, backgroundColor:'white', paddingVertical:5, alignItems:'center'}}>
        <Text style={{flex:1,paddingLeft:10}} >{"Select Location:"}</Text>
      <Picker style={styles.defaultPicker}
        selectedValue={selectedLocation}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedLocation(itemValue)
        }>
        {locationItems}
      </Picker>
      </View>
      <View style={{flexDirection:'row', marginTop:20, backgroundColor:'white', paddingVertical:5, alignItems:'center'}}>
        <Text style={{flex:1,paddingLeft:10}} >{"Username For User:"}</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      </View>
      <View style={{flexDirection:'row', marginVertical:20, backgroundColor:'white', paddingVertical:5, alignItems:'center'}}>
        <Text style={{flex:1,paddingLeft:10}} >{"Password For User::"}</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      </View>
      <Button title={"Submit"} onPress={() => doSubmit()} />
    </ScrollView>
  );
};

export default AddReservation;

const styles = StyleSheet.create({
  input: {
    flex:1
  },
  container: {
    flex: 1,
  },
  defaultPicker: {
      flex:1,
  },
});