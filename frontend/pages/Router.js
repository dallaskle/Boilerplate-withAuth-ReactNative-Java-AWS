import React, { useContext, useEffect } from 'react';
import { View,  Text } from 'react-native';
import { RouterContext } from '../context/RouterContext';
import { Context } from '../context/Context';
import Auth from './Auth';
import { getToken } from '../services/Auth/GetTokenFromDevice';
import { getUserFromDevice } from '../services/GetUserFromDevice';
import HomeScreen from './Home'

const Router = () => {
  const { token, updateToken, updateUserData } = useContext(Context)
  const { router, setRouter } = useContext(RouterContext);

  const routes = [
    { name: 'Home', label: 'Home' },
  ];

  const getRouteComponent = () => {
    switch (router.name) {
      case 'Auth':
        return <Auth />;
      case 'Home':
        return <HomeScreen />;
      default:
        return null;
    }
  };

  useEffect(()=>{
    getToken().then(res => {
      updateToken(res)
    })
    getUserFromDevice().then(res => {
      updateUserData(res)
    })
  },[])

  if (token == null) {
    return <Auth />;
  }

  return (
    <View style={{ flex: 1 }}>
      {getRouteComponent()}
    </View>
  );
};

export default Router;
