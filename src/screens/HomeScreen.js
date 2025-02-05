import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import MapComponent from '../components/MapComponent';  // Adjust path as needed
import { fetchSatelliteImage } from '../utils/fetchSatelliteImage';

export default function HomeScreen({ navigation }) {
  const [coordinate, setCoordinate] = useState(null);
  const [date, setDate] = useState('2023-11-01');
  const [imageUrl, setImageUrl] = useState(null);

  const handleLocationSelect = (selectedLocation) => {
    setCoordinate(selectedLocation);  // Update state with the selected coordinate
  };

  const fetchImage = async () => {
    if (!coordinate) return;
    const url = await fetchSatelliteImage(coordinate.latitude, coordinate.longitude, date);
    setImageUrl(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fetch Satellite Image 🛰️</Text>
      <MapComponent onLocationSelect={handleLocationSelect} />

      {coordinate && (
        <Text style={styles.coordinates}>
          Latitude: {coordinate.latitude}, Longitude: {coordinate.longitude}
        </Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />

      <Button title="Fetch Image" onPress={fetchImage} />

      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  coordinates: {
    fontSize: 16,
    color: 'blue',
    marginTop: 5,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});
