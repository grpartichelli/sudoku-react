import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from "../constants/colors"

class BottomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={bottomStyles.bottomButton}
        activeOpacity={.5}
        onPress={() => console.log("BottomButton pressed.")}
      >
        <Text style={bottomStyles.bottomButtonText}> 1 </Text>
      </TouchableOpacity>
    );
  }
}

const renderBottomButtons = () => {


  return (
    <View style={bottomStyles.container}>
      <View style={bottomStyles.topContainer}>
        <View style={bottomStyles.bottomButtonContainer} >
          <BottomButton />
          <BottomButton />
          <BottomButton />
          <BottomButton />
        </View>
        <View style={bottomStyles.bottomButtonContainer}>
          <BottomButton />
          <BottomButton />
          <BottomButton />
          <BottomButton />
        </View>
      </View>
      <View style={bottomStyles.bottomContainer}>
        <Text style={styles.text}>More Icons Here</Text>
      </View>
    </View>


  );


}

const bottomStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topContainer: {

    flex: 2,
    alignItems: 'stretch',
    justifyContent: 'center',



  },
  bottomContainer: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',


  },
  bottomButtonContainer: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',



  },

  bottomButtonText: {
    color: COLORS.mainColor,
    fontSize: 25
  },
  bottomButton: {
    padding: 5,
    marginHorizontal: 2.5,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: COLORS.mainColor,

  },
})


export default function Sudoku() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Something Will Be Here</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.text}>The Sudoku Game is Here</Text>
      </View>
      <View style={styles.bottomContainer}>
        {renderBottomButtons()}
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
    alignItems: 'stretch',
    justifyContent: 'center',

  },


})//Title container