import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonImage = ({ onPress, children, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
            {children}
        </TouchableOpacity>
    )
}


const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0
    }
}

export { ButtonImage };