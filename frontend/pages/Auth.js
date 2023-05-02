import React, { useState, useContext } from 'react'
import Login from '../components/Auth/Login';
import Spinner from '../components/Spinner';
import { login, signup } from '../routes/auth';
import {Context} from '../context/Context'
import {RouterContext} from '../context/RouterContext'
import { saveToken } from '../services/Auth/GetTokenFromDevice';


const Auth = () => {

    const [loading, setLoading] = useState(false);

    const [isLogin, setIsLogin] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { updateUserData, updateToken } = useContext(Context);
    const { updateRouter } = useContext(RouterContext);

    const handleClick = () => {
        // Implement your own signup logic here
        if (isLogin) {

            setLoading(true)

            login(email,password).then(data => {
                data = data.data
                console.log(data)
                updateToken(data.token)
                updateUserData(data.user)
                setLoading(false)
                updateRouter({name: 'Home', label: 'Home'})
            }).catch(err => {
                setLoading(false)
                console.log(err.response)
            })
            
        } else {
            setLoading(true)
            signup(email, password).then(data => {
                data = data.data
                console.log(data)
                updateToken(data.token)
                updateUserData(data.user)
                saveToken(data.token)
                if(!data.token){
                    setLoading(false)
                }
                //route to new page
                updateRouter({name: 'Home', label: 'Home'})
            }).catch(err => {
                setLoading(false)
            })
        }

    }

    if (loading) {
        return <Spinner />
    }
    
    return (
            <Login 
                setIsLogin={setIsLogin}
                setEmail={setEmail} 
                setPassword={setPassword} 
                handleClick={handleClick} 
                isLogin={isLogin}
            />
    )
}

export default Auth;