import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF', // Blue primary color
    background: '#F5F5F5', // Light background
    text: '#222222', // Dark text
    accent: '#FF4081', // Accent pink
  },
};
