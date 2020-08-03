import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

//Exporting the pages
import Home from "./containers/Home"
import Sudoku from "./containers/Sudoku"

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomePage"
          component={Home}

        />
        <Stack.Screen name="SudokuPage" component={Sudoku} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

