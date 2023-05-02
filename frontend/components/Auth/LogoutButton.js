import React, { useContext } from 'react';
import { Button } from 'react-native';
import {logout} from '../../services/Auth/Logout'
import { Context } from '../../context/Context';

const LogoutButton = () => {

    const { updateUserData, updateToken } = useContext(Context)

    const handleLogout = () => {
        logout().then(res => {
            if (res) {
                updateUserData(null)
                updateToken(null)
            } else {
                console.log("Couldn't logout.")
            }
        })
    }

    return (
        <Button
            title="Logout"
            onPress={handleLogout}
        />
    );
};

export default LogoutButton;
