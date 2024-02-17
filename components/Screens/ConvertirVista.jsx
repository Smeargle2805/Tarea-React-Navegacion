import React, { useState } from 'react';
import { View } from 'react-native';
import { ConvertidorForm } from '../ConvertidorForm';
import { ResultadoConversor } from '../ResultadoConversor';
import { Encabezado1 } from '../Encabezado';
import { styles } from '../../styles/vista';
import { Logo } from '../Logo';

const ConvertidorScreenDolar = () => {
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <Logo/>
      <Encabezado1/>
      <ConvertidorForm onConversion={setResultado} />
      <ResultadoConversor dolares={resultado} />
    </View>
  );
};

export default ConvertidorScreenDolar;