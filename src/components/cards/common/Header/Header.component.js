import React from 'react';
import { Text, View, Image } from 'react-native';
import { ButtonImage } from '../../common';
import Store from '../../../assets/images/store.svg';
import Shape from '../../../assets/images/Shape.svg';
import Question from '../../../assets/images/question.svg';

const Header = (props) => {
    const { textStyle, viewStyle, addressStyle } = styles;

    return (
        <View style={[viewStyle, props.headerStyle]}>
            <View style={styles.leftImageContainer}>
                <View style={[styles.storeContainer, props.shapeContainer]}>
                    <Store width={20} height={40} />
                </View>
            </View>
            <View style={[styles.middleContainerStyle, props.middleContainerStyle]}>
                <View style={[styles.textContainerStyle, props.textContainerStyle]}>
                    <Text style={addressStyle}>{props.addressText}</Text>
                </View>
                <View style={styles.textContainerStyle}>
                    <Text style={[textStyle, props.textStyle]}>{props.headerText}</Text>
                </View>
            </View>
            <View style={styles.rightContainerStyle}>
                {props.screen == 'home' ? <ButtonImage style={[styles.shapeContainer, props.shapeContainer]} onPress={props.onPress}>
                    <Shape width={20} height={20} />
                </ButtonImage> : <View style={styles.questionContainer}>
                        {/* <Question width={20} height={20} /> */}
                    </View>}
            </View>
        </View>
    );

};

const styles = {
    viewStyle: {
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        // paddingTop: 15,
        paddingLeft: 10,
        position: 'relative',
        flex: 1,
        flexDirection: 'row'
    },
    addressStyle: {
        fontFamily: 'ProximaNovaRegular',
        fontSize: 12,
        color: '#737373'
    },
    textStyle: {
        fontSize: 14,
        fontFamily: 'ProximaNovaBold',
        color: '#333333'
    },
    addStyle: {
        width: 40,
        height: 40
    },
    leftImageContainer: {
        // flex: 1,
        marginRight: 10,
        paddingBottom: 10,
        width: 40,
        height: 40,
        // backgroundColor: 'red'
    },
    storeContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#d8d8d8'
    },
    middleContainerStyle: {
        flex: 6,
        flexDirection: 'column',
        paddingBottom: 10,
        paddingTop: 15
    },
    textContainerStyle: {
        flex: 1
    },
    rightContainerStyle: {
        width: 40,
        height: 40,
        // backgroundColor: 'red',
        // paddingBottom: 10,
        marginRight: 10
    },
    shapeContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#d8d8d8'
    },
    questionContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Header };