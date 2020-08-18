import React, { Component } from 'react'
import { View, StyleProp, ViewStyle, StyleSheet, Text } from "react-native"
import { COLORS } from '../../constants/colors'
import SudokuBlock from "../components/SudokuBlock"
import _ from 'lodash'

let test_board = [
    ["2", "3", " ", "9", "4", " ", "6", "7", " "],
    ["8", " ", " ", "3", "2", "5", "9", "1", "4"],
    ["9", " ", " ", "7", "6", " ", "3", "2", " "],
    ["1", " ", " ", " ", " ", " ", "7", "9", "2"],
    ["5", " ", "3", "2", "1", " ", "4", "8", "6"],
    ["4", " ", " ", "6", "8", " ", "5", "3", "1"],
    ["7", " ", " ", "1", " ", " ", " ", " ", "9"],
    ["6", "5", "9", "8", "7", "2", "1", "4", "3"],
    ["3", " ", " ", " ", "9", " ", " ", " ", "7"]
];

let test_board_small = [
    ["2", "3", " ", "9", "4", " "],
    ["8", " ", " ", "3", "2", "5"],
    ["9", " ", " ", "7", "6", " "],
    ["1", " ", " ", " ", " ", " "],
    ["5", " ", "3", "2", "1", " "],
    ["4", " ", " ", "6", "8", " "],
];

interface SudokuBoardProps {
    sudokinho: boolean;


}
const renderBoard = (sudokinho: boolean) => {
    const divStyle = {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',


    }
    let board = sudokinho ? test_board_small : test_board;

    let blocks = board.map((block, index) => {
        return <SudokuBlock key={index} text={"BLOCK"} sudokinho={sudokinho} content={block}></SudokuBlock>
    })

    let sudoku_grid = _.chunk(blocks, 3).map((block, index) => {
        return <View key={index} style={divStyle as StyleProp<ViewStyle>}  >
            {block}
        </View>
    }
    )


    return sudoku_grid;


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
        alignItems: 'stretch',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: COLORS.mainColor,
    },


})