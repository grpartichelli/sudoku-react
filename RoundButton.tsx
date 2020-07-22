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
                <Text style={styles.text}> New game </Text>
            </TouchableOpacity>)
    }
}



const styles = StyleSheet.create({

    roundButton: {
        padding: 5,
        borderRadius: 20,
        backgroundColor: COLORS.backgroundDark,
        borderColor: COLORS.lightPink,
        borderWidth: 2,
        margin: 10,
        alignItems: 'center'
    },
    text: {
        color: COLORS.lightPink,
        fontSize: 22,
    },
});