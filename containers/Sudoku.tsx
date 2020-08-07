import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from "../constants/colors"
import BottomButton from "../components/BottomButton"


const renderBottomButtons = () => {


  return (
    <Text>HEY</Text>


  );


}

const bottomStyles = StyleSheet.create({

  topContainerDiv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },

})


export default function Sudoku() {
  return (
    <View style={styles.container}>


      <View style={styles.topContainer}>
        <Text style={styles.text}>Something Will Be Here</Text>
      </View>

      {/* Sudoku game part */}

      <View style={styles.middleContainer}>
        <Text style={styles.text}>The Sudoku Game is Here</Text>
      </View>

      {/* Bottom part where the buttom for the number 1-9 or 1-6 
      are and the extra help buttons */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTopContainer}>
          <View style={bottomStyles.topContainerDiv}>
            <BottomButton text='1' />
            <BottomButton text='2' />
            <BottomButton text='3' />
            <BottomButton text='4' />
            <BottomButton text='5' />
          </View>
          <View style={bottomStyles.topContainerDiv}>
            <BottomButton text='6' />
            <BottomButton text='7' />
            <BottomButton text='8' />
            <BottomButton text='9' />
            <BottomButton text='X' />
          </View>


        </View>
        <View style={styles.bottomBottomContainer}>
          <Text style={{ fontSize: 15, color: COLORS.mainColor }}>Erase and Stuff</Text>
        </View>

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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.mainColor,

  },
  bottomContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',

  },
  bottomTopContainer: {

    flex: 3,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '80%',
    margin: '4%'
  },


  bottomBottomContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }


})//Title container