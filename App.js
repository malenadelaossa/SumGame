import { StyleSheet, Text, View } from 'react-native';

import Game from './src/components/Game';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default App = () =>(
  <View style={styles.container}>
    <Game randomNumbersCount={6} />
    <StatusBar style="dark" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 50,
  },
});
