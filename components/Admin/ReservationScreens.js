import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Parse from "parse/react-native.js";
import ReservationTile from './ReservationTile';

const ReservationScreens = ({route}) => {
    const { name } = route.params;
    const [reservations, setReservation] = React.useState([]);

    const getReservations = async function () {
        const parseQuery = new Parse.Query('Reservation');
        const parseQueryStart = new Parse.Query('Reservation');
        const parseQueryEnd = new Parse.Query('Reservation');
        parseQuery.include('accommodation');
        parseQuery.include('location');
        parseQuery.include('user');

        switch (name){
          case 'Past': parseQuery.lessThan('endDate',new Date());
            break;
          case 'Ongoing': 
            parseQueryStart.lessThanOrEqualTo('startDate',new Date());
            parseQueryEnd.greaterThanOrEqualTo('endDate',new Date());
            parseQuery._andQuery([parseQueryStart, parseQueryEnd]);
            break;
          case 'Future': parseQuery.greaterThan('startDate',new Date())
            break;
          default: break;
        }

    
        try {
          let result = await parseQuery.find();
          setReservation(result);
          console.log(result)
        } catch (error) {
          Alert.alert('Error!', error.message);
        }
      };

    React.useEffect(() => {
      getReservations()
    }, [name]);

    const reservation=reservations.map((value)=>
      <ReservationTile name={value.get("name")} startDate={value.get('startDate')} endDate={value.get('endDate')} key={value.id} />) 

    if(reservations.length==0)
    {
      return <ActivityIndicator style={styles.loader} size="large" color="#092240" />
    }
    else{
      return (
          <View style={styles.container}>
          {reservation}
        </View>
      );
    }

};

export default ReservationScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})