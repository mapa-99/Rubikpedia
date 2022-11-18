import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Pages/HomeScreen';
import ProfileScreen from './src/Pages/ProfileScreen';
import ImportantPartsScreen from './src/Pages/ImportantPartsScreen';
import NotationScreen from './src/Pages/NotationScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { auth } from './src/constants/firebase';

const Tab = createBottomTabNavigator();

const App = () => {
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
      <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>

    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>

    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>

    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
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
