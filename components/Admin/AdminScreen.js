import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReservationScreens from './ReservationScreens';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AddReservation from './AddReservation';

const Tab = createBottomTabNavigator();


export default function Admin(){
    return (
      <Tab.Navigator 
      initialRouteName='Ongoing'
      screenOptions={{
        tabBarActiveTintColor: '#c99a00',
      }}
      >
        <Tab.Screen 
            name="Past" 
            component={ReservationScreens} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="aircraft-take-off" size={size} color={color} />
                ),
              }}
            initialParams={{ name: 'Past' }}
            />
        <Tab.Screen 
            name="Ongoing" 
            component={ReservationScreens} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="aircraft" size={size} color={color} />
                ),
              }}
            initialParams={{ name: 'Ongoing' }}
            />
        <Tab.Screen 
            name="Future" 
            component={ReservationScreens} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="aircraft-landing" size={size} color={color} />
                ),
              }}
            initialParams={{ name: 'Future' }}
            />
        <Tab.Screen 
            name="Add New" 
            component={AddReservation} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="plus" size={size} color={color} />
                ),
              }}
            />
      </Tab.Navigator>
    );
  }