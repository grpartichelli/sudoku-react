import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Button } from 'react-native';
import { COLORS } from '../constants/colors';
import RoundButton from '../src/components/RoundButton';


//Some icons
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconIcon from "react-native-vector-icons/Ionicons";
import WatermelonIcon from '../assets/WatermelonIcon';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.topContainer}>
        <Text style={styles.text}>Watermelon Sudoku</Text>
      </View >

      <View style={styles.middleTopContainer}>
        <WatermelonIcon fill={COLORS.mainColor} style={styles.watermelonIcon} />
      </View>

      <View style={styles.middleBottomContainer}>
        <RoundButton text="New Game" onPress={() =>
          navigation.navigate("SudokuPage")
        } color={COLORS.mainColor} backgroundColor={COLORS.background} />
        <RoundButton text="Resume" color={COLORS.mainColor} backgroundColor={COLORS.background} />

      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => { console.log("Settings Clicked") }} activeOpacity={.6}  >
          <FontAwesomeIcon name="cog" size={35} style={styles.bottomIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { console.log("Menu Clicked") }} activeOpacity={.6}  >
          <IoniconIcon name="md-menu" size={35} style={styles.bottomIcon} />
        </TouchableOpacity >

        <TouchableOpacity onPress={() => { console.log("Paint Clicked") }} activeOpacity={.6}>
          <IoniconIcon name='md-color-palette' size={35} style={styles.bottomIcon} />
        </TouchableOpacity>

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
  },//Title container
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
  ,//WatermelonIcon container
  middleTopContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',


  }
  ,//New game and score buttons containers
  middleBottomContainer: {
    flex: 1.5,
    alignItems: 'stretch',
    justifyContent: 'center',


  },//Icons containers
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',

  },
  text: {
    color: COLORS.mainColor,
    fontSize: 30,

  },

  bottomIcon: {
    color: COLORS.mainColor,
  },


  watermelonIcon: {

    flex: 1
  }

});
