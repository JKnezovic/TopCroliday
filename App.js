import * as React from 'react';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./components/LoginScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import MainScreen from "./components/MainScreen";
import PreStay from "./components/PreStay/PreStay";
import DuringStay from "./components/DuringStay/DuringStay";
import PostStay from "./components/PostStay/PostStay";
import DuringStayDetails from "./components/DuringStay/DuringStayDetails";
import Admin from "./components/Admin/AdminScreen";


Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('F4H5ofBLuLAIxCkwAE2E2oS2Hn1b5kppANz13hd0','tZrBhwOCMFkTbg1WJcWzgjVgoJ38sK5Xb0QjpywB');
Parse.serverURL = 'https://parseapi.back4app.com/';


const style={
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor:'#092240',
    },
  headerTitleStyle:{
    color:'white'
  },
  headerTintColor: 'white',
  }


const Stack = createNativeStackNavigator();

  const App = () => {

    const [isSignedIn,setIsSignedIn] = React.useState(false)

    const handleAuthStatus= async function(){
      const currentUser = await Parse.User.currentAsync();
      setIsSignedIn(currentUser?true:false)
    }

    React.useEffect(() => {
      handleAuthStatus()
    });
    
  return (
      <NavigationContainer>
        <Stack.Navigator  
        screenOptions={style}
        initialRouteName="Welcome" >
          {!isSignedIn?(
            <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
            {props => <LoginScreen {...props} handleAuthStatus={handleAuthStatus} />}
            </Stack.Screen>
            </>
            ):(
            <>
              <Stack.Screen name="Admin" component={Admin}/>
              {/* <Stack.Screen name="Main" component={MainScreen} 
                    options={{ 
                      title: 'Top Croliday'
                      }}/>
              <Stack.Screen name="PreStay" component={PreStay} />
              <Stack.Screen name="DuringStay" component={DuringStay}/>
              <Stack.Screen name="DuringStayDetails"component={DuringStayDetails} options={{ title: 'DuringStay' }}/>
              <Stack.Screen name="PostStay" component={PostStay}/> */}
            </>

            )}
            
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;