import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from "../../constants/colors"


interface SudokuCellProps {
    text?: string;


}

export default class SudokuCell extends Component<SudokuCellProps> {
    render() {
        return (
            <TouchableOpacity
                style={styles.sudokuCell}
                activeOpacity={.5}
                onPress={() => console.log("sudokuCell pressed.")}
            >
                <Text style={styles.sudokuCellText}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    sudokuCellText: {
        color: COLORS.mainColor,
        fontSize: 20,
    },
    sudokuCell: {
        borderColor: COLORS.mainColor,
        borderWidth: 1,
        backgroundColor: COLORS.background,
        textAlign: 'center',

    },
})
