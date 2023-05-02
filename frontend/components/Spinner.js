import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Spinner = () => {

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Spinner;
