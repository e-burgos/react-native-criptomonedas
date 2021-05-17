import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.cointaner}>
      <Text style={styles.text}>Desde Criptomonedas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cointaner: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  } 
});

export default App;
