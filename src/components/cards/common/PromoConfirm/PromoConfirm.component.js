import React from 'react';
import { Text, View, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Button } from '../Button/Button.component';

const PromoConfirm = ({ children, visible, onAccept, onTouch, onCancel, buttonText, cardSectionStyle, header, modalStyle, cancelButtonText, containerStyle, headerStyle, subContainerStyle, cancelButtonStyle, buttonStyle, cancelButtonTextStyle, buttonTextStyle }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => { }}
        >
            <TouchableHighlight style={[styles.containerStyle, containerStyle ]} onPress={onTouch}>
                <View style={[styles.subContainerStyle, subContainerStyle]}>
                    <View style={[styles.headerStyle, headerStyle]}>
                        <Text style={styles.headerTextStyle}>{header}</Text>
                    </View>
                    <View style={[styles.cardSectionStyle, cardSectionStyle, modalStyle ]}>
                        {children}
                    </View>
                    <View style={styles.buttonContainerStyle}>
                        <Button onPress={onCancel} style={[styles.cancelButtonStyle, cancelButtonStyle]} gradientStyle={styles.gradientStyle} textStyle={[{ color: '#8c8c8c' }, cancelButtonTextStyle]} colors={['transparent', 'transparent']}>
                            {cancelButtonText}
                        </Button>
                        <Button onPress={onAccept} style={[styles.buttonStyle, buttonStyle]} gradientStyle={styles.gradientStyle} textStyle={[{ color: '#041E42' }, buttonTextStyle]} colors={['transparent', 'transparent']}>
                            {buttonText}
                        </Button>
                    </View>
                </View>
            </TouchableHighlight>
        </Modal>
    );
}

const styles = {
    cardSectionStyle: {
        // justifyContent: 'center',
        backgroundColor: '#fff',
        height: 120,
        padding: 20,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textStyle: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        padding: 8
    },
    subContainerStyle: {
        backgroundColor: '#fff',
        borderRadius: 14
    },
    buttonContainerStyle: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    cancelButtonStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        marginRight: 10,
        borderColor: '#d8d8d8',
        borderRadius: 14,
        height: 30,
        width: '50%'
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#041E42',
        borderRadius: 14,
        height: 30,
        width: '50%'
    },
    gradientStyle: {
        borderRadius: 14
    },
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#041E42',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14
    },
    headerTextStyle: {
        color: '#fff',
        fontFamily: 'ProximaNovaRegular',
        fontSize: 14,
    }
}
export { PromoConfirm };