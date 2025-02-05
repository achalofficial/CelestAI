import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';

const MapComponent = ({ onLocationSelect, dim = 0.5 }) => {
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMapPress = (e) => {
        const coordinate = e.nativeEvent.coordinate;
        setSelectedMarker(coordinate);  // Set the selected marker
        onLocationSelect(coordinate);  // Pass the coordinate directly to the parent component
    };

    // Calculate rectangle coordinates based on dim
    const calculateRectangle = (coordinate) => {
        const latDelta = dim / 2;
        const lonDelta = dim / 2;
        return [
            { latitude: coordinate.latitude + latDelta, longitude: coordinate.longitude - lonDelta },
            { latitude: coordinate.latitude + latDelta, longitude: coordinate.longitude + lonDelta },
            { latitude: coordinate.latitude - latDelta, longitude: coordinate.longitude + lonDelta },
            { latitude: coordinate.latitude - latDelta, longitude: coordinate.longitude - lonDelta }
        ];
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 0,
                    longitude: 0,
                    latitudeDelta: 180,
                    longitudeDelta: 360,
                }}
                onPress={handleMapPress}
            >
                {selectedMarker && <Marker coordinate={selectedMarker} />}
                {selectedMarker && (
                    <Polygon
                        coordinates={calculateRectangle(selectedMarker)}
                        strokeColor="#FF0000"
                        fillColor="rgba(255,0,0,0.2)"
                        strokeWidth={2}
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: 400,
    },
});

export default MapComponent;
