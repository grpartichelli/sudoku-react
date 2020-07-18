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
                <Text style={styles.text}> Sugar High </Text>
            </TouchableOpacity>)
    }
}



const styles = StyleSheet.create({

    roundButton: {
        //flex: 1,
        //alignContent: "center",
        //justifyContent: "center",
        padding: 15,
        borderRadius: 20,
        backgroundColor: COLORS.lightPink,
    },
    text: {

        color: COLORS.backgroundDark,
        fontSize: 18,
    },
});