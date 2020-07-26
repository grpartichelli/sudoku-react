import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from "./constants/colors"
import Home from "./containers/Home"
import Sudoku from "./containers/Sudoku"

export default function App() {
  return (


    <Home />

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
})