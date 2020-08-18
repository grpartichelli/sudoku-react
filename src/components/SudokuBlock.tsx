import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { COLORS } from "../../constants/colors"
import SudokuCell from "./SudokuCell"

interface SudokuBlockProps {
    sudokinho: boolean;
    content?: string[];
    text?: string;
}



const renderBlock = (sudokinho: boolean) => {
    const divStyle = {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',


    }

    /*
    const sudoku_grid = test_board.map((row, index) => {

        const current_row = row.map((symbol, index) => <SudokuCell key={index} text={symbol} />)
        return (<View key={index} style={divStyle as StyleProp<ViewStyle>} >
            {current_row}
        </ View>)


    })

    */

    return (
        <Text style={styles.text}>BLOCK</Text>
    );
}

export default class SudokuBlock extends Component<SudokuBlockProps> {
    render() {
        return (
            <View style={styles.container}>

                {renderBlock(this.props.sudokinho)}

            </View>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.mainColor,
        borderWidth: 2,

    },
    text: {
        color: COLORS.mainColor,
        fontSize: 35,


    },
})
