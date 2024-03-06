// ResourcesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResourcesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Resources Screen</Text>
      {/* Add your resources screen content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ResourcesScreen;
