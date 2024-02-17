import axios from 'axios';

export const ApiService = {
  getTasaDeCambio: async () => {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      return response.data.rates.HNL;
    } catch (error) {
      console.error('Error al obtener la tasa de cambio:', error.message);
      throw error;
    }
  },

  convertirMoneda: (monto, tasaCambio) => {
    return parseFloat(monto) / tasaCambio;
  },
};

export const ApiService2 = {
  getTasaDeCambio: async () => {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/EUR');
      return response.data.rates.HNL;
    } catch (error) {
      console.error('Error al obtener la tasa de cambio:', error.message);
      throw error;
    }
  },

  convertirMoneda: (monto, tasaCambio) => {
    return parseFloat(monto) / tasaCambio;
  },
};
