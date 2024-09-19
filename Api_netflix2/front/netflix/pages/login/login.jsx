import React, { useState, useEffect } from 'react';
import axios, { HttpStatusCode } from 'axios';
import { Text, View, TextInput, Button, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { HttpStatusCode } from 'axios';
// import axios from 'axios';
import styles from './styles';
import { getStateFromPath } from '@react-navigation/native';


export default function Login({navigation}) {

    const [user, setUser]=useState('')
    const [password, setPassword]=useState('')
    const [token, setToken] = useState('')
    const [mensagem, setMensagem] = useState('')


    useEffect(()=> {
        AsyncStorage.setItem('token', token)
            .then(
                ()=>{
                    if(token != null){
                        console.log('Token Login:', token)
                        return token
                    }
                }
            )
            .catch(
                (error)=>{
                    console.error('Erro ao salvar o token', error)
                }
            )
    },
    [token] )

    const logar = async ()=>{
        try{
            const response = await axios.post(
                'http://127.0.0.1:8000/api/token/',
                {
                    username: user,
                    password: password
                }
            )
            console.log(response.data.access)
            setToken(response.data.access)
            navigation.navigate('Home')
            // }
            // console.log(response.status == HttpStatusCode.2)      
            // setMensagem(token)
        }
        catch(error){
            console.error(error)
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>

                    {/* campo user  */}
                    <TextInput style={styles.caixa}
                    value={user}
                    onChangeText={(e)=>setUser(e)}
                    placeholder='Username:'>
                    </TextInput>

                    {/* campo password  */}
                    <TextInput style={styles.caixa}
                    value={password}
                    placeholder='password:'
                    onChangeText={(e)=>setPassword(e)}
                    secureTextEntry={true}
                    >
    
                    </TextInput>
                
                    <Pressable 
                        style={styles.button}
                        onPress={logar}>
                        <text>OK</text>
                    </Pressable>

            </View>
        
        </View>
        )
    }
