import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NotationCard = ({imagen, letra}) => {
  return (
    <View style={styles.card}>
      <Image resizeMode="contain" source={imagen} />
      <Text style={styles.cardText}>{letra}</Text>
    </View>
  );
};

export default NotationCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 120,

    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
