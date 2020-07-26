import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from "../constants/colors"


export default function Sudoku() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sudoku!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.lightPink,
    fontSize: 20
  }
})//Title container