import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>Criptomonedas</Text>
            <Text style={styles.subtitle}>by Esteban Burgos</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: Platform.OS === 'ios' ? 40 : 10,
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black'
    },
    subtitle: {
        fontSize: 10,
        textTransform: 'uppercase',
        fontFamily: 'Lato-Regular',      
    }
});
 
export default Header;