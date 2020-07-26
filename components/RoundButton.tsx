import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';




interface RoundButtonProps {
    text?: string;
    backgroundColor?: string;
    color?: string;
    onPress?: () => void;

}

export default class RoundButton extends Component<RoundButtonProps> {
    render() {
        const colorStyles = {
            backgroundColor: this.props.backgroundColor,
            borderColor: this.props.color,
        }
        return (


            <TouchableOpacity
                style={[styles.roundButton, colorStyles]}
                activeOpacity={.8}
                onPress={this.props.onPress}

            >
                <Text style={{ fontSize: 20, color: this.props.color }}> {this.props.text}</Text>
            </TouchableOpacity>)
    }
}



const styles = StyleSheet.create({

    roundButton: {
        padding: 2.5,
        borderRadius: 20,
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 45,
        alignItems: 'center'
    },

});