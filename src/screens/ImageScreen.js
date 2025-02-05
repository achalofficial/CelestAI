import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { MotiView } from 'moti';

export default function ImageScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <MotiView
        from={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 10 }}
        style={[styles.card, { borderColor: colors.primary }]}
      >
        <Text style={[styles.title, { color: colors.text }]}>
          Image Analysis 📸
        </Text>
      </MotiView>
      
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  card: { padding: 20, borderWidth: 2, borderRadius: 10, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold' },
});
