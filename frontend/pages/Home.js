import React from 'react';
import { View } from 'react-native';
import Home from '../components/Home/Home'
import LogoutButton from '../components/Auth/LogoutButton';

const HomeScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <Home />
      <LogoutButton />
    </View>
  );
};

export default HomeScreen;
