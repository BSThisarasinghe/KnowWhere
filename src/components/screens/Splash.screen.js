import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('home');
            console.log("Splash");
        }, 3000);
    }

    render() {
        return (
            <View>
                <Text>Splash</Text>
            </View>
        );
    }
}

export default Splash;