import React, { Component } from 'react';
import { View, StyleProp, ViewStyle, StyleSheet, Text } from "react-native"
import { COLORS } from "../../constants/colors"
import SudokuCell from "./SudokuCell"
import _ from 'lodash'

interface SudokuBlockProps {
    sudokinho: boolean;
    content: string[];

}



const renderBlock = (sudokinho: boolean, content: string[]) => {
    const divStyle = {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',


    }


    //Transforms the blocks in cells
    let cells = content.map((value, index) => {
        return <SudokuCell key={index} text={value}></SudokuCell>
    })
    //Put them in grids(every 3 cells)
    let sudoku_block = _.chunk(cells, 3).map((cell, index) => {
        return <View key={index} style={divStyle as StyleProp<ViewStyle>}  >
            {cell}
        </View>
    }
    )



    return (
        sudoku_block
    );
}

export default class SudokuBlock extends Component<SudokuBlockProps> {
    render() {
        return (
            <View style={styles.container}>

                {renderBlock(this.props.sudokinho, this.props.content)}

            </View>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        borderColor: COLORS.mainColor,
        borderWidth: 2,

    },
    text: {
        color: COLORS.mainColor,
        fontSize: 35,


    },
})
