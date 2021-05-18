import React, { useState, useEffect } from 'react';
import {StyleSheet, View, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import Crypto from './components/Crypto';
import CurrencyForm from './components/CurrencyForm';
import Header from './components/Header';
import axios from 'axios';

const image = { uri: "https://i.pinimg.com/originals/43/21/88/432188f502b9a625f74a7d8cacbe5b8b.jpg" };

const App = () => {

  const [currency, setCurrency] = useState('');
  const [crypto, setCrypto] = useState('');
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState({});

  const getPrice = async () => {
    setPrice({});
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
    const response = await axios.get(url);

    // Cargar otro resultado
    setLoading(true);
    setTimeout(() => {
      setPrice(response.data.DISPLAY[crypto][currency]);
      setLoading(false)
    }, 2000)
  };

  return (
    <View style={styles.mainCointaner}>
      <ImageBackground source={image} style={styles.background}>
        <Header />
        <ScrollView>
          <View style={styles.cointaner}>
            <CurrencyForm 
              currency={currency}
              crypto={crypto}
              setCurrency={setCurrency}
              setCrypto={setCrypto}
              getPrice={getPrice}
            />
          </View>
          {Object.keys(price).length > 0 ? 
            <View style={styles.cointaner}>
              <Crypto 
                price={price}
              />
            </View>
          : null}
          {loading ?
            <View style={{marginTop: 30}}>
              <ActivityIndicator size="large" color="black" /> 
            </View> : null}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCointaner: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  cointaner: {
    marginHorizontal: '2.5%',
    marginVertical: '3%'
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  } 
});

export default App;
