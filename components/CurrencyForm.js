import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const CurrencyForm = ({currency, setCurrency, crypto, setCrypto, getPrice}) => {

    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        const readAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const response = await axios.get(url);
            setCryptos(response.data.Data);
            console.log(response.data.Data);
        };
        readAPI();
    }, [])

    const getCurrency = currency => {
        setCurrency(currency)
        console.log(currency)
    }

    const getCrypto = crypto => {
        setCrypto(crypto);
        console.log(crypto)
    }

    return (
        <View style={styles.form}>
            <View>
                <Text style={styles.label}>Moneda</Text>
                <View>
                    <Picker
                        selectedValue={currency}
                        onValueChange={ currency => getCurrency(currency)}
                        itemStyle={{height: 120}}
                    >
                        <Picker.Item label="- Selecciona una Moneda -" value=""/>
                        <Picker.Item label="Dolar Americano" value="USD"/>
                        <Picker.Item label="Euro" value="EUR" />
                        <Picker.Item label="Peso Argentino" value="ARS" />
                        <Picker.Item label="Libra Esterlina" value="GBP" />
                    </Picker>
                </View>
            </View>
            <View>
                <Text style={styles.label}>Criptomoneda</Text>
                <View >
                    <Picker
                        selectedValue={crypto}
                        onValueChange={ crypto => getCrypto(crypto)}
                        itemStyle={{height: 120}}
                    >
                        <Picker.Item label="- Selecciona una Criptomoneda -" value=""/>
                        {
                            cryptos.map(item => (
                                <Picker.Item key={item.CoinInfo.Id} label={item.CoinInfo.FullName} value={item.CoinInfo.Name}/>
                            ))
                        }
                    </Picker>
                </View>
            </View>
            {crypto.length > 0 && currency ? 
                <TouchableHighlight onPress={() => getPrice()} style={styles.button}>
                    <Text style={styles.textButton}>Obtener Info</Text>
                </TouchableHighlight>
            : null}
        </View>
     );
}

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 10
    },
    label: {
        color: 'black',
        fontSize: 20,
        textTransform: 'uppercase',
        fontFamily: 'Lato-Regular'
    },
    button: {
        backgroundColor: 'black',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
});
 
export default CurrencyForm;