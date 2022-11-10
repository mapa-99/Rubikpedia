import {View, Text} from 'react-native';
import React from 'react';
import NotationCard from '../Components/NotationCard';
import {notaciones} from '../notaciones';
import img from '../../assets/descarga.jpg';
const NotationScreen = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          borderRadius: 8,
          backgroundColor: '#ffffff',
          padding: 10,
          fontSize: 15,
          margin: 16,
        }}>
        Los "algoritmos", que son secuencias de movimientos que se deben seguir
        para llegar a un estado deseado cuentan con una notación o letra
        específica para cada movimiento, los cuales serán explicados a
        continuación {'\n'}
        El cubo tiene 6 caras, a cada cara se le asigna una letra diferente,
        esta letra significa dar 1/4 de vuelta a la cara en sentido de las
        manesillas del reloj. La rotación en sentido antihorario se anota con un
        '
        <Text style={{fontWeight: 'bold'}}>
          (se entiende como movimiento prima)
        </Text>{' '}
        después de la letra. Si se tiene que mover una cara 1/2 vuelta se pone
        un número 2 después del movimiento.
      </Text>
      {notaciones.map((not, i) => (
        <NotationCard imagen={img} key={i} letra={not.letra} />
      ))}
    </View>
  );
};

export default NotationScreen;
