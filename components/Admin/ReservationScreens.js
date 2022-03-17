import * as React from 'react';
import { StyleSheet, RefreshControl, ActivityIndicator, ScrollView } from 'react-native';
import Parse from "parse/react-native.js";
import ReservationTile from './ReservationTile';




const ReservationScreens = ({route}) => {
    const { name } = route.params;
    const [reservations, setReservation] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      getReservations()
      setRefreshing(false)
    }, []);

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
        } catch (error) {
          Alert.alert('Error!', error.message);
        }
      };

    React.useEffect(() => {
      getReservations()
    }, [name]);

    const reservation=reservations.map((value)=>
      <ReservationTile 
        name={value.get("name")} 
        startDate={value.get('startDate')} 
        endDate={value.get('endDate')} 
        key={value.id} 
        accommodation={value.get('accommodation').get('Name')}
        choices={value.get('choices')}
        username={value.get('user').get('username')}

         />) 

    if(reservations.length==0)
    {
      return <ActivityIndicator style={styles.loader} size="large" color="#092240" />
    }
    else{
      return (
          <ScrollView 
          style={styles.container} 
          contentContainerStyle={{alignItems:'center'}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}>
          {reservation}
        </ScrollView>
      );
    }

};

export default ReservationScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  modalView: {
    flex:4/5,
    marginTop: '20%',
    backgroundColor: "white",
    borderRadius: 20,
    //padding: 35,
    width:'95%',
    alignSelf:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    width:'100%',
    backgroundColor:'#092240',
    overflow:'hidden',
    color:'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

  }
})