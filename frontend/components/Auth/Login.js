import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Login = (props) => {

    const [isLogin, setIsLogin] = useState(props.isLogin)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleScreen = () => {
        props.setIsLogin(!isLogin)
        setIsLogin(!isLogin)
    }
    
    const handleEmail = (val) => {
        setEmail(val)
        props.setEmail(val)
    }

    const handlePassword = (val) => {
        setPassword(val)
        props.setPassword(val)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Auth App</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => handleEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => handlePassword(text)}
                value={password}
            />
            <TouchableOpacity onPress={handleScreen}>
                <Text style={styles.link}>{isLogin ? "I don't have an account" : "I already have an account"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.handleClick}>
                <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Signup'}</Text>
            </TouchableOpacity>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 204,
    },
    logo: {
        height: 100,
        width: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    button: {
        backgroundColor: "gray",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    link: {
        color: "lightgray",
        marginBottom: 16,
    },
});

export default Login;