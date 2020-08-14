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
                style={styles.bottomButton}
                activeOpacity={.5}
                onPress={() => console.log("BottomButton pressed.")}
            >
                <Text style={styles.bottomButtonText}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    bottomButtonText: {
        color: COLORS.background,
        fontSize: 30,
        paddingVertical: '2%',
        paddingHorizontal: '1.5%'
    },
    bottomButton: {


        paddingHorizontal: '2%',
        borderColor: COLORS.background,
        backgroundColor: COLORS.mainColor,
        marginHorizontal: '1.5%',
        borderRadius: 50,


    },
})
