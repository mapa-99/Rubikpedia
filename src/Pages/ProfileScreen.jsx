import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {auth} from '../constants/firebase';

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={async () => {
          await auth.signOut();
        }}>
        <Text>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
