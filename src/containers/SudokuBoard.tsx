import React, { Component } from 'react'
import { View, StyleProp, ViewStyle, StyleSheet, Text } from "react-native"

import BottomButton from "../components/SudokuCell"

let test_board = [
    ["2", "3", ".", "9", "4", ".", "6", "7", "."],
    ["8", ".", ".", "3", "2", "5", "9", "1", "4"],
    ["9", ".", ".", "7", "6", ".", "3", "2", "."],
    ["1", ".", ".", ".", ".", ".", "7", "9", "2"],
    ["5", ".", "3", "2", "1", ".", "4", "8", "6"],
    ["4", ".", ".", "6", "8", ".", "5", "3", "1"],
    ["7", ".", ".", "1", ".", ".", ".", ".", "9"],
    ["6", "5", "9", "8", "7", "2", "1", "4", "3"],
    ["3", ".", ".", ".", "9", ".", ".", ".", "7"]
];

interface SudokuBoardProps {
    sudokinho: boolean;


}
const renderBoard = (sudokinho: boolean) => {
    const divStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    }


    const sudoku_grid = test_board.map((row, index) => {

        const current_row = row.map((symbol, index) => <BottomButton key={index} text={symbol} />)
        return (<View key={index} style={divStyle as StyleProp<ViewStyle>} >
            {current_row}
        </ View>)


    })



    return (
        sudoku_grid
    );

}

export default class SudokuBoard extends Component<SudokuBoardProps>{
    render() {
        return (
            <View style={styles.container}>

                {renderBoard(this.props.sudokinho)}

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },


})