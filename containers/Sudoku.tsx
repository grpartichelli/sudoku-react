import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from "../constants/colors"

interface BottomButtonProps {
  text?: string;


}

class BottomButton extends Component<BottomButtonProps> {
  render() {
    return (
      <TouchableOpacity
        style={bottomStyles.bottomButton}
        activeOpacity={.5}
        onPress={() => console.log("BottomButton pressed.")}
      >
        <Text style={bottomStyles.bottomButtonText}> {this.props.text} </Text>
      </TouchableOpacity>
    );
  }
}

const renderBottomButtons = () => {


  return (
    <View style={bottomStyles.container}>
      <View style={bottomStyles.topContainer}>
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
      <View style={bottomStyles.bottomContainer}>
        <Text style={{ fontSize: 20, color: COLORS.mainColor }}>Erase and Stuff</Text>
      </View>
    </View >


  );


}

const bottomStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',


  },
  topContainer: {

    flex: 3,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '80%',
    margin: '4%'
  },
  topContainerDiv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },


  bottomContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bottomButtonText: {
    color: COLORS.background,
    fontSize: 32
  },
  bottomButton: {
    borderWidth: 2,

    paddingHorizontal: '2%',
    borderColor: COLORS.background,
    backgroundColor: COLORS.mainColor,
    marginHorizontal: '1%',
    borderRadius: 50,


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