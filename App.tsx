import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { COLORS } from './constants/colors';
import RoundButton from './RoundButton';

//Some icons
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconIcon from "react-native-vector-icons/Ionicons";
import WatermelonIcon from './assets/WatermelonIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <Text style={styles.text}>Watermelon Sudoku</Text>

      </View >

      <View style={styles.middleTopContainer}>
        <WatermelonIcon fill={COLORS.lightPink} style={styles.watermelonIcon} />
      </View>

      <View style={styles.middleBottomContainer}>
        <RoundButton />
        <RoundButton />
      </View>
      <View style={styles.bottomContainer}>
        <FontAwesomeIcon name="cog" size={40} style={styles.bottomIcon} />
        <IoniconIcon name="md-menu" size={40} style={styles.bottomIcon} />
        <IoniconIcon name='md-color-palette' size={40} style={styles.bottomIcon} />
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
    flex: 2,
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
    color: COLORS.lightPink,
    fontSize: 30,

  },
  bottomIcon: {
    color: COLORS.lightPink,
  },
  watermelonIcon: {

    flex: 1
  }

});
