import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Platform } from 'react-native';
import { ContextProvider } from './context/Context';
import { RouterContextProvider } from './context/RouterContext';
import Router from './pages/Router';

export default function App() {

  return (
    <ContextProvider>
      <RouterContextProvider>
        {Platform.OS === 'ios' ? <View style={{flex: 0.04, backgroundColor: "white"}} /> : null}
        <Router />
      </RouterContextProvider>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
