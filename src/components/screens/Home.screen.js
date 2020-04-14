import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 1,
            mapWidth: Dimensions.get('window').width - 30,
            latitude: 6.927079,
            longitude: 79.861244,
            radius: 2000
        };
    }

    onMapPress(e) {
        this.setState({
            marker: [{ coordinate: e.nativeEvent.coordinate }],
            longitude: e.nativeEvent.coordinate.longitude,
            latitude: e.nativeEvent.coordinate.latitude,
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.mapSubContainer, { width: this.state.width }]}>
                    <MapView style={[styles.mapStyle, { flex: 1, width: this.state.mapWidth }]}
                        initialRegion={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1,
                        }}
                        // ref={mapRef}
                        provider={PROVIDER_GOOGLE}
                        onPress={this.onMapPress.bind(this)}
                        showsUserLocation={true}
                        followsUserLocation={true}
                        showsMyLocationButton={true}
                        showsCompass={true}
                        moveOnMarkerPress={true}
                        // showsTraffic={true}
                        toolbarEnabled={true}
                        onMapReady={() => this.setState({ width: width - 1 })}
                    >
                        <Marker draggable
                            coordinate={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                            }}
                            onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                        />
                        <Circle
                            center={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                            }}
                            radius={this.state.radius}
                            fillColor='rgba(253, 48, 4,0.5)'
                            strokeColor='rgba(253, 48, 4,1)'
                        />
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = {
    mapSubContainer: {
        flex: 1,
        height: 350
    },
    mapStyle: {
        height: 350
    }
}

export default Home;