import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Watermelon.</Text>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262322',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color: '#FFB4A2',
    fontSize: 18,
  },
});
