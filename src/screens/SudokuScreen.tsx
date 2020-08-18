import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from "../../constants/colors"

import SudokuInteractionButtons from '../containers/SudokuInteractionButtons';
import SudokuBoard from '../containers/SudokuBoard';

//Defines sudoku game size, 6 number = true.
let SUDOKINHO = false;

export default function Sudoku() {
  return (
    <View style={styles.container}>


      <View style={styles.topContainer}>
        <Text style={styles.text}>Something Will Be Here</Text>
      </View>

      {/* Sudoku game part */}

      <View style={styles.middleContainer}>
        <SudokuBoard sudokinho={SUDOKINHO} />
      </View>

      {/* Bottom part where the buttom for the number 1-9 or 1-6 
      are and the extra help buttons */}
      <View style={styles.bottomContainer}>
        <SudokuInteractionButtons sudokinho={SUDOKINHO} />
      </View>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.mainColor,

  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleContainer: {
    flex: 4.5,
    alignItems: 'stretch',
    justifyContent: 'center',


  },
  bottomContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',

  },



})