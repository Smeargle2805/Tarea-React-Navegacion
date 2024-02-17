import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/resultado';

export const ResultadoConversor = ({ dolares }) => {
  return (
    <View style={styles.resultContainer}>
      {dolares !== '' && <Text>{`Equivalente en Dólares: $${dolares}`}</Text>}
    </View>
  );
};

export const ResultadoConversor2 = ({ euros }) => {
  return (
    <View style={styles.resultContainer}>
      {euros !== '' && <Text>{`Equivalente en Euros: €${euros}`}</Text>}
    </View>
  );
};
