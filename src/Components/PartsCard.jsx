import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PartsCard = ({title, img, description}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop:10}}>
        <View style={styles.cont_image}>
          <Image resizeMode="contain" style={styles.image} source={img} />
        </View>
        <View style={{marginLeft: 12}}>
          <Text style={styles.title}>{title}</Text>
          <View
            style={{
              marginTop: 4,
              borderWidth: 0,
              width: '85%',
            }}>
            <Text
              style={{
                color: '#808080',
                fontSize: 12,
              }}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PartsCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 15,
    height: 140,
    justifyContent: 'center',
    shadowColor: '#787777',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 20,
    marginRight: 20,
   
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  cont_image: {
    height: 90,
    width: 90,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
