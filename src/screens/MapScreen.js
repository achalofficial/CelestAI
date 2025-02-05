import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Import MapView and Marker

export default function MapScreen({ navigation }) {
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);

  // Default region for the map (San Francisco)
  const initialRegion = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMapPress = (e) => {
    // Set the selected coordinate from the map press event
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setSelectedCoordinate({ latitude, longitude });
  };

  const handleFetchImage = () => {
    if (selectedCoordinate) {
      // Pass the selected coordinates to fetch the satellite image or any other functionality
      console.log('Fetching image for:', selectedCoordinate);
      // You can now use selectedCoordinate to fetch satellite image or do any other operations
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Location on the Map</Text>

      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapPress} // Handle the map press to get the coordinates
      >
        {selectedCoordinate && (
          <Marker coordinate={selectedCoordinate} title="Selected Location" />
        )}
      </MapView>

      {selectedCoordinate && (
        <View style={styles.buttonContainer}>
          <Text>Selected Coordinates: </Text>
          <Text>Lat: {selectedCoordinate.latitude}</Text>
          <Text>Lon: {selectedCoordinate.longitude}</Text>
          <Button title="Fetch Satellite Image" onPress={handleFetchImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  map: { width: '100%', height: 400 },
  buttonContainer: { marginTop: 20, alignItems: 'center' },
});
