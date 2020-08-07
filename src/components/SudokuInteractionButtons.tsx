import React, { Component } from 'react'
import BottomButton from "./BottomButton"
import { View, StyleProp, ViewStyle, StyleSheet, Text } from "react-native"
import { COLORS } from '../../constants/colors'


//symbols are the numbers from 1-9
const renderSymbolButtons = (sudokinho: boolean) => {
    const divStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    }

    let symbols = ['1', '2', '3', '4', '5', '6'];
    if (!sudokinho) {
        symbols = [...symbols, '7', '8', '9'];
    }
    symbols.push('X');

    let divisionPoint = Math.round(symbols.length / 2);

    const topSymbols = symbols.slice(0, divisionPoint).map((symbol) =>
        <BottomButton key={symbol} text={symbol} />
    )

    const bottomSymbols = symbols.slice(divisionPoint).map((symbol) =>
        <BottomButton key={symbol} text={symbol} />
    )

    return (
        [<View key={1} style={divStyle as StyleProp<ViewStyle>} >
            {topSymbols}
        </ View>,
        <View key={2} style={divStyle as StyleProp<ViewStyle>}>
            {bottomSymbols}
        </View>]
    );

}

interface SudokuInteractionButtonsProps {
    sudokinho: boolean;


}



export default class SudokuInteractionButtons extends Component<SudokuInteractionButtonsProps>{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    {renderSymbolButtons(this.props.sudokinho)}
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={{ fontSize: 15, color: COLORS.mainColor }}>Erase and Stuff</Text>
                </View>
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
    topContainer: {

        flex: 3,
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '80%',
        margin: '4%'
    },


    bottomContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }


})