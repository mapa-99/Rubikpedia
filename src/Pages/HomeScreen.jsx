import {View, Text} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
};

export default HomeScreen;
