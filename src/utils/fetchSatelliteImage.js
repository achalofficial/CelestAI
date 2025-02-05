import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { NASA_API_KEY } from '@env';

// const NASA_API_KEY = ''; // Replace with your actual key

// Function to fetch and cache satellite images based on bounding box coordinates
export async function fetchSatelliteImage(lat, lon, date) {
  try {
    console.log("Insdie Fecth");
    
    const fileName = `${lat}_${lon}_${date}.jpg`;
    console.log("fileName-->", fileName);
    
    const localUri = `${FileSystem.documentDirectory}${fileName}`;
    const fileInfo = await FileSystem.getInfoAsync(localUri);
    if (fileInfo.exists) {
      console.log('Using cached image');
      return localUri;
    }

    // Fetch image from NASA API
    const response = await axios.get('https://api.nasa.gov/planetary/earth/assets', {
      params: {
        lon,
        lat,
        date,
        dim: 0.1,
        api_key: NASA_API_KEY,
      },
    });

    const imageUrl = response.data.url;
    const downloadedImage = await FileSystem.downloadAsync(imageUrl, localUri);

    console.log('Image saved locally:', downloadedImage.uri);
    return downloadedImage.uri;
  } catch (error) {
    console.error('Error fetching NASA Image:', error);
    return null;
  }
}

// Function to fetch images based on the bounding box
export async function fetchImagesInBoundingBox(coordinates, date) {
  const imageUrls = [];
  for (let coord of coordinates) {
    const { lat, lon } = coord;
    const url = await fetchSatelliteImage(lat, lon, date);
    if (url) {
      imageUrls.push(url);
    }
  }
  return imageUrls;
}
