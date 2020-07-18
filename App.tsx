import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { COLORS } from './constants/colors';
import RoundButton from './RoundButton';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Watermelon</Text>
      <RoundButton />
      <StatusBar barStyle="light-content" />
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
    fontSize: 18,
    //flex: 1,
    //alignContent: "center",
    //justifyContent: "center",
  },

});
