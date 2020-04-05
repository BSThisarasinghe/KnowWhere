import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { ButtonImage, Input } from '../../../cards';
import Search from '../../../assets/images/search.svg';

const SearchBar = ({ placeholder, value, onShow, title, errorText, style, onChangeText }) => {

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{title}</Text>
            <View style={styles.viewStyle}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#DBDDDE"
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={false}
                    style={[styles.dateFieldStyle, style]}
                />
                <ButtonImage onPress={onShow} style={[styles.buttonStyle, style]}>
                    <Search width={20} height={20} />
                </ButtonImage>
            </View>
            <Text style={styles.errorTextStyle}>{errorText}</Text>
        </View>
    );

};

const styles = {
    containerStyle: {
        marginBottom: -15
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        // backgroundColor: 'red'
    },
    datePickerIconStyle: {
        width: 20,
        height: 20
    },
    dateFieldStyle: {
        borderWidth: 1,
        borderColor: '#d8d8d8',
        borderRadius: 2,
        paddingLeft: 20,
        flex: 4,
        height: 50,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d8d8d8',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    textStyle: {
        fontFamily: 'ProximaNovaRegular',
        color: '#333333',
        marginBottom: 5
    },
    errorTextStyle: {
        fontFamily: 'ProximaNovaRegular',
        color: '#333333',
        fontSize: 12,
        color: 'red',
        marginLeft: 20
    }
};

export { SearchBar };