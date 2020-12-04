import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RandomNumber from './RandomNumber';

export default Game = ({ randomNumbersCount = 4 }) => {
  const [ selectedNumbers, setSelectedNumbers ] = useState([]);
  const [ randomNumbers, setRandomNumbers ] = useState([]);
  const [ target, setTarget ] = useState([]);

  useEffect(() => {
    const firstRandomNumbers = Array.from({ length: randomNumbersCount })
      .map(() => 1 + Math.floor(10 * Math.random()));
    const firstTarget = firstRandomNumbers.slice(0, randomNumbersCount - 2)
      .reduce((acc, cur) => acc + cur, 0);
    setRandomNumbers(firstRandomNumbers);
    setTarget(firstTarget);
  }, []);

  const isNumberSelected = numberIndex =>
    selectedNumbers.some(number => number === numberIndex);

  const selectNumber = number =>
    setSelectedNumbers([ ...selectedNumbers, number ]);

  return (
    <View>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, index) =>
          <RandomNumber
            id={index}
            key={index}
            number={randomNumber}
            disabled={isNumberSelected(index)}
            onSelected={selectNumber} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
