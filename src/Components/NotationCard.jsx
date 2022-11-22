import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NotationCard = ({imagen, letra}) => {
  return (
    <View style={styles.card}>
      <Image
        resizeMode="contain"
        style={styles.cardImage}
        source={{uri: imagen}}
      />
      <Text style={styles.cardText}>{letra}</Text>
    </View>
  );
};

export default NotationCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 120,
    padding: 5,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#787777',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 30,
    // margin: 10,
  },
});
