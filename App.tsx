import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { COLORS } from './constants/colors';
import RoundButton from './RoundButton';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconIcon from "react-native-vector-icons/Ionicons";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <Text style={styles.text}>Watermelon Sudoku</Text>

      </View >
      <View style={styles.middleContainer}>
        <FontAwesomeIcon name="cog" size={150} style={styles.icon} />
        <RoundButton />
        <RoundButton />
      </View>
      <View style={styles.bottomContainer}>
        <FontAwesomeIcon name="cog" size={45} style={styles.icon} />
        <IoniconIcon name="md-menu-outline" size={45} style={styles.icon} />
        <IoniconIcon name='md-color-palette' size={45} style={styles.icon} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBackground,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
  ,
  middleContainer: {
    flex: 2,
    alignItems: 'stretch',
    justifyContent: 'center',


  }
  ,
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',

  },
  text: {
    color: COLORS.lightPink,
    fontSize: 30,

  },
  icon: {
    color: COLORS.lightPink,
  }

});
