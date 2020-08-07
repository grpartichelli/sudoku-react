import React, { Component } from 'react'
import BottomButton from "./BottomButton"
import { View, StyleProp, ViewStyle } from "react-native"

interface SudokuInteractionButtonsProps {
    sudokinho?: boolean;


}
export default class SudokuInteractionButtons extends Component<SudokuInteractionButtonsProps>{
    render() {
        const divStyle = {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',

        }

        let symbols = ['1', '2', '3', '4', '5', '6'];
        if (!this.props.sudokinho) {
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
}