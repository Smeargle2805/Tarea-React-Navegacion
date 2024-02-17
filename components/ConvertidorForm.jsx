import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import {ApiService, ApiService2} from './ApiService';
import { styles } from '../styles/convertidor';

export const ConvertidorForm = ({ onConversion }) => {
  const [lempiras, setLempiras] = useState('');

  useEffect(() => {
    const obtenerTasaDeCambio = async () => {
      try {
        const tasaCambio = await ApiService.getTasaDeCambio();
      } catch (error) {
      }
    };

    obtenerTasaDeCambio();
  }, []);

  const convertirMoneda = async () => {
    try {
      const tasaCambio = await ApiService.getTasaDeCambio();
      const resultado = ApiService.convertirMoneda(lempiras, tasaCambio);
      onConversion(resultado.toFixed(2));
    } catch (error) {
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la cantidad en Lempiras"
        keyboardType="numeric"
        value={lempiras}
        onChangeText={(text) => setLempiras(text)}
      />
      <Button title="Convertir" onPress={convertirMoneda} />
    </View>
  );
};

export const ConvertidorForm2 = ({ onConversion }) => {
  const [lempiras, setLempiras] = useState('');

  useEffect(() => {
    const obtenerTasaDeCambio = async () => {
      try {
        const tasaCambio = await ApiService2.getTasaDeCambio();
      } catch (error) {
        console.error('Error al obtener la tasa de cambio:', error.message);
      }
    };

    obtenerTasaDeCambio();
  }, []);

  const convertirMoneda = async () => {
    try {
      const tasaCambio = await ApiService2.getTasaDeCambio();
      const resultado = ApiService2.convertirMoneda(lempiras, tasaCambio);
      onConversion(resultado.toFixed(2));
    } catch (error) {
      console.error('Error al convertir la moneda:', error.message);
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la cantidad en Lempiras"
        keyboardType="numeric"
        value={lempiras}
        onChangeText={(text) => setLempiras(text)}
      />
      <Button title="Convertir" onPress={convertirMoneda} />
    </View>
  );
};