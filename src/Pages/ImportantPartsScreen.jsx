import {View, Text} from 'react-native';
import React from 'react';
import PartsCard from '../Components/PartsCard';
import {partes} from '../partes';
const ImportantPartsScreen = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 15, margin: 18}}>
        Para resolver el cubo, tenemos que conocerlo. Para empezar, se le dará
        un vistazo a las diferentes piezas. El cubo cuenta con 26 piezas de 3
        tipos distintos
      </Text>
      {partes.map(part => (
        <PartsCard
          title={part.title}
          img={part.img}
          description={part.description}
        />
      ))}
    </View>
  );
};

export default ImportantPartsScreen;
