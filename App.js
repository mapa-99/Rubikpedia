import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {auth} from './src/constants/firebase';
import HomeScreen from './src/Pages/HomeScreen';
import ImportantPartsScreen from './src/Pages/ImportantPartsScreen';
import Login from './src/Pages/Login';
import NotationScreen from './src/Pages/NotationScreen';
import ProfileScreen from './src/Pages/ProfileScreen';
import Register from './src/Pages/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = 'cube';
            } else if (route.name === 'Partes') {
              iconName = 'shapes';
            } else if (route.name === 'Perfil') {
              iconName = 'house-user';
            } else if (route.name === 'Notación') {
              iconName = 'pencil-alt';
            } else if (route.name === 'Cerrar') {
              iconName = 'door-open';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        {/* <Tab.Screen name="Perfil" component={ProfileScreen} /> */}
        <Tab.Screen name="Partes" component={ImportantPartsScreen} />
        <Tab.Screen name="Notación" component={NotationScreen} />
        <Tab.Screen
          options={{headerShown: false}}
          name="Cerrar"
          component={() => {
            useEffect(() => {
              auth.signOut();
            }, []);

            return null;
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
