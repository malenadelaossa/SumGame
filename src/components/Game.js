import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default Game = ({ randomNumbersCount }) => {
  //const target = 10 + Math.floor(40 * Math.random());
  const randomNumbers = Array.from({ length: randomNumbersCount })
    .map(() => {
      return  1 + Math.floor(9 * Math.random());
    });
  const target = randomNumbers.slice(0, randomNumbersCount - 2)
    .reduce((acc, cur) => acc + cur, 0);
  return (
    <View>
      <Text style={styles.target}>{target}</Text>
      {randomNumbers.map((randomNumber, index) =>
        <Text key={index}>{randomNumber}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    textAlign: 'center',
  },
});
