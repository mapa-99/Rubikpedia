import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Pages/HomeScreen';
import ProfileScreen from './src/Pages/ProfileScreen';
import ImportantPartsScreen from './src/Pages/ImportantPartsScreen';
import NotationScreen from './src/Pages/NotationScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
const App = () => {
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
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Partes" component={ImportantPartsScreen} />
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Notación" component={NotationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
