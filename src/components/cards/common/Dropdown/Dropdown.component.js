
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

class Dropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            level: 'Select'
        };
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.labelContainerStyle}>
                    <Text style={[styles.labelStyle, this.props.labelStyle]}>{this.props.label}</Text>
                    <Image
                        source={this.props.labelIcon}
                        style={styles.addStyle}
                    />
                </View>
                <ModalDropdown options={this.props.options} onSelect={this.props.onSelect} style={[styles.dropdownStyle, this.props.style]} dropdownStyle={{ width: '80%', height: 125 }} dropdownTextStyle={{ color: '#000', fontSize: 15 }} dropdownTextHighlightStyle={{ fontWeight: 'bold' }} defaultIndex={this.props.defaultIndex}>
                    <View style={styles.dropdownContainerStyle}>
                        <View style={styles.valueContainerStyle}>
                            <Text style={styles.valueStyle}>{this.props.value}</Text>
                        </View>
                        <View style={styles.imageContainerStyle}>
                            <Image
                                source={require('../../../assets/images/down.png')}
                                style={styles.downStyle}
                            />
                        </View>
                    </View>
                </ModalDropdown>
                <View style={styles.errorContainerStyle}>
                    <Text style={styles.errorStyle}>{this.props.errorText}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        marginBottom: 50
    },
    downStyle: {
        width: 10,
        height: 10
    },
    labelStyle: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: 14,
        color: '#333333',
        marginBottom: 7,
        marginRight: 7
    },
    dropdownStyle: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: '#BABABA',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 30
    },
    labelContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dropdownContainerStyle: {
        flexDirection: 'row'
    },
    valueContainerStyle: {
        width: '70%'
    },
    valueStyle: {
        color: '#333333',
        fontFamily: 'ProximaNovaRegular',
        fontSize: 14
    },
    imageContainerStyle: {
        width: '30%',
        alignItems: 'flex-end',
        paddingRight: 10,
        justifyContent: 'center'
    },
    addStyle: {
        width: 14,
        height: 14
    },
    errorContainerStyle: {
        paddingLeft: 20
    },
    errorStyle: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: 12,
        color: 'red',
        marginTop: 5
    }
}

export { Dropdown };