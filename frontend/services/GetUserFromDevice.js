import AsyncStorage from '@react-native-async-storage/async-storage';

// Save the JWT auth token to AsyncStorage
export const saveUserOnDevice = async (user) => {
  try {
    user = JSON.stringify(user)
    await AsyncStorage.setItem('auth_user', user);
  } catch (error) {
    console.error('Error saving Auth User:', error);
  }
};

// Get the JWT auth token from AsyncStorage
export const getUserFromDevice = async () => {
  try {
    let user = await AsyncStorage.getItem('auth_user');
    user = JSON.parse(user)
    return user;
  } catch (error) {
    console.log('Error getting Auth User:', error);
    return null;
  }
};
