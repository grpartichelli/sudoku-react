import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS } from './constants/colors';



export default class RoundButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.roundButton}
                activeOpacity={.8}
            >
                <Text style={styles.text}> New Game </Text>
            </TouchableOpacity>)
    }
}



const styles = StyleSheet.create({

    roundButton: {
        padding: 5,
        borderRadius: 20,
        backgroundColor: COLORS.lightPink,
        margin: 10,
    },
    text: {
        color: COLORS.backgroundDark,
        fontSize: 22,
    },
});