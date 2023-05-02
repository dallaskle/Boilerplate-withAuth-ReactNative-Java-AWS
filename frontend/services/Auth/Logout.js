import AsyncStorage from '@react-native-async-storage/async-storage';

export const logout = async () => {

    try {
        await AsyncStorage.removeItem('auth_jwt_token');
        await AsyncStorage.removeItem('auth_user');
        return true;
    } catch (error) {
    console.log('Error Logging Out:', error);
    return false;
    }
    return true;

}