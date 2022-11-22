import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {View, Text, Touchable} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Pages/HomeScreen';
import ProfileScreen from './src/Pages/ProfileScreen';
import ImportantPartsScreen from './src/Pages/ImportantPartsScreen';
import NotationScreen from './src/Pages/NotationScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {auth} from './src/constants/firebase';

const Tab = createBottomTabNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(
      onAuthStateChanged(function (user, err) {
        if (user) {
          Actions.signUpVerify();
        } else {
        }
      }),
    );
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="Press me"
            onPress={async () => {
              const res = await auth.createUserWithEmailAndPassword(
                'stet@gmail.com',
                '1234',
              );
              console.log(res);
            }}
          />
        </View>
      </SafeAreaView>
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
        {/* <Touchable onPress={() => console.log('hola')}>
          <Tab.Screen name="Logout" component={NotationScreen} />
        </Touchable> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
