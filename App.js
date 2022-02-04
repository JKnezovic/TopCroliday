import * as React from 'react';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./components/LoginScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import MainScreen from "./components/MainScreen"

Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('F4H5ofBLuLAIxCkwAE2E2oS2Hn1b5kppANz13hd0','tZrBhwOCMFkTbg1WJcWzgjVgoJ38sK5Xb0QjpywB');
Parse.serverURL = 'https://parseapi.back4app.com/';

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
        <Stack.Navigator  initialRouteName="Welcome" >
          {!isSignedIn?(
            <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
            {props => <LoginScreen {...props} handleAuthStatus={handleAuthStatus} />}
            </Stack.Screen>
            </>
            ):(
            <>
            <Stack.Screen name="Main" component={MainScreen} 
                  options={{ 
                    title: 'Top Croliday',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor:'#092240',
                      },
                    headerTitleStyle:{
                      color:'white'
                    }
                    }}/>
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;