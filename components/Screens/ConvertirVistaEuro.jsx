import React, { useState } from 'react';
import { View } from 'react-native';
import { ConvertidorForm2 } from '../ConvertidorForm';
import { ResultadoConversor2 } from '../ResultadoConversor';
import { Encabezado2 } from '../Encabezado';
import { styles } from '../../styles/vista';
import { Logo2 } from '../Logo';

const ConvertidorScreenEuro = () => {
    const [resultado, setResultado] = useState('');

    return (
        <View style={styles.container}>
            <Logo2 />
            <Encabezado2 />
            <ConvertidorForm2 onConversion={setResultado} />
            <ResultadoConversor2 euros={resultado} />
        </View>
    );
};

export default ConvertidorScreenEuro;