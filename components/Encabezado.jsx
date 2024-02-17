import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/encabezado';

export const Encabezado1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Conversor de Lempiras a Dólares</Text>
    </View>
  );
};

export const Encabezado2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Conversor de Lempiras a Euros</Text>
    </View>
  );
};