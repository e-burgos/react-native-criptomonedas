import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Crypto = ({price}) => {


    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image} 
                    source={{ uri: `https://www.cryptocompare.com/${price.IMAGEURL}`}} 
                />
                <Text style={styles.title}>{price.FROMSYMBOL}</Text>
                <Text style={styles.title}>{price.PRICE}</Text>
            </View>
            <View> 
                <View style={styles.content}>
                    <Text style={styles.label}>Precio más alto del día: </Text>
                    <Text style={styles.text}>{price.HIGHDAY}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Precio más bajo dl día: </Text>
                    <Text style={styles.text}>{price.LOWDAY}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Variación últimas 24 horas: </Text>
                    <Text style={styles.text}>{price.CHANGEPCT24HOUR}%</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Última actualización: </Text>
                    <Text style={styles.text}>{price.LASTUPDATE}</Text>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 30,
        paddingVertical: 30,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        borderStyle: 'solid',
        borderColor: '#D6CEC2',
        borderWidth: 1,
  
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        marginLeft: 10
    },
    content: {
        borderRadius: 5,
        paddingHorizontal: '5%',
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center' 
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular'
    },
    text: {
        fontSize: 18,
        textTransform: 'capitalize',
        fontFamily: 'Lato-Regular'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
});
 
export default Crypto;