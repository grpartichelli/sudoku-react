import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from "../constants/colors"


const renderBottomButtons = () => {

  for (let i = 0; i < 10; i++) {
    return (


      <TouchableOpacity
        style={styles.bottomButton}
        activeOpacity={.5}
        onPress={() => console.log("BottomButton pressed.")}
      >
        <Text style={styles.bottomButtonText}> 1 </Text>
      </TouchableOpacity>
    );
  }

}

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
    flex: 5,
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

  bottomButtonText: {
    color: COLORS.mainColor,
    fontSize: 24
  },
  bottomButton: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: COLORS.mainColor
  },
})//Title container