import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { COLORS } from './constants/colors';
import RoundButton from './RoundButton';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <Text style={styles.text}>Watermelon Sudoku</Text>
      </View >
      <View style={styles.middleContainer}>
        <RoundButton />
        <RoundButton />
      </View>
      <View style={styles.bottomContainer}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  middleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: COLORS.lightPink,
    fontSize: 30,

  },

});
