import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View, TextInput, Button, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Login from '../login/login';


export default function Home({navigation}){

    const [id, setID] = useState('')

    const [filmeG, setFilmeG] = useState('')
    const [generoG, setGeneroG] = useState('')
    const [anoG, setAnoG] = useState('')
    const [classifG, setClassifG] = useState('')
    const [idiomaG, setIdiomaG] = useState('')


    const [filme, setFilme] = useState('')
    const [genero, setGenero] = useState('')
    const [ano, setAno] = useState('')
    const [classif, setClassif] = useState('')
    const [idioma, setIdioma] = useState('')

    const [token, setToken] = useState('');

    useEffect(()=> {
      AsyncStorage.getItem('token')
          .then(
              (response)=>{
                  if(token != null){
                      console.log('Token Home:', response)
                      setToken(response)
                  }
              }
          )
          .catch(
              (error)=>{
                  console.error('Erro ao salvar o token', error)
              }
          )
  },
  [] )


  // minha tentativa 

    // useEffect(()=> {
    //     try{
    //         const token2 = (AsyncStorage.getItem('token'))
            
    //           // setToken(token);
    //           // console.log('Token encontrado:', tokenHome);
    //           console.log(token2)
    //           setToken(token2)
    //           console.log(token)
    //         }
            
    //         catch{
    //           (error)=>{
    //             console.error('Erro ao salvar o token', error)
    //           }

    //         }

    //     console.log('token Home', token)
      
    //  }, 
    //  [])
  

    const capturar = async ()=> {
        try{
            const response = await axios.get(
                'http://127.0.0.1:8000/api/filme/'+id,
                {
                  headers:{
                    'Authorization': `Bearer ${token}`
                  }
                }
            )

            const responsegenero = await axios.get(
              'http://127.0.0.1:8000/api/genero/'+ response.data.genre,
              {
                headers:{
                  'Authorization': `Bearer ${token}`
                }
              }
            )
            const responseClassificacao= await axios.get(
              'http://127.0.0.1:8000/api/classificacao/'+ response.data.classf,
              {
                headers:{
                  'Authorization': `Bearer ${token}`
                }
              }
            )
            
            console.log(responsegenero.data.genre, 'testando')
            setFilmeG(response.data.titulo)
            setGeneroG(responsegenero.data.genre)
            setAnoG(response.data.ano)
            setClassifG(responseClassificacao.data.classf)
            setIdiomaG(response.data.idioma)
            auth

            console.log(response.data)
        }catch{
            console.log(Error)
        }
    }

    const enviar = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/listfilmes',
              {
                titulo: filme,
                genero: genero,
                ano: ano,
                classf: classif,
                idioma: idioma,
              },
              {
                
                headers:{
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                }
              }
            )
          
            console.log('Dados inseridos com sucesso...')
            setFilme('')
            setGenero('')
            setAno('')
            setClassif('')
            setIdioma('')
            
          } catch (error) {
            console.log('Erro ao inserir dados...', error)
          }
        }
        
        const atualizar = async () => {
          try {
            const response = await axios.put(
              'http://127.0.0.1:8000/api/filme/'+id,
              {
                titulo: filmeG,
                genero: generoG,
                ano: anoG,
                classf: classifG,
                idioma: idiomaG,
              },
              {
                headers:{
                  'Authorization': `Bearer ${token}`
                }
              },
              
            )
            
            console.log('Alterado com sucesso...')
            
          } catch (error) {
            console.log('Erro ao atualizar', error)
          }
        }
        
        const deletar = async () => {
          try {
            const response = await axios.delete(
              'http://127.0.0.1:8000/api/filme/'+id, 
              {
                headers:{
                  'Authorization': `Bearer ${token}`
                }
              } 
            )
            
            setFilmeG('')
            setGeneroG('')
            setAnoG('')
            setClassifG('')
            setIdiomaG('')
            // response.data.delete
            
            console.log('deletado com sucesso')

        } catch (error) {
            console.log('Erro ao deletar', error)
        }
    }

    return (
      
        <View style={styles.container}>
    
          <View style={styles.stGet}>

            <View style={{ flexDirection: 'row', padding: 10 }}>

              <Text>ID:</Text>
              <TextInput
                value={id}
                onChangeText={(e) => { setID(e) }}
                style={styles.caixaID}
              />

              {/* ---- BOTAO GET --- */}
              <Pressable
                style={styles.btn}
                onPress={capturar}
                >
                <Text style={{ fontWeight: 'bold', }}>GET</Text>
              </Pressable>

                  {/* ---- BOTAO PUT --- */}

              <Pressable
                style={styles.btn}
                onPress={atualizar}
                >
                <Text style={{ fontWeight: 'bold', }}>PUT</Text>
              </Pressable>

                  {/* ---- BOTAO DELETE --- */}

              <Pressable
                style={styles.btn}
                onPress={deletar}
              >
                <Text style={{ fontWeight: 'bold', }}>DELETE</Text>
              </Pressable>


            </View>

                <Text>Filme</Text>
                <TextInput
                    value={filmeG}
                    style={styles.caixaGet}
                    onChangeText={(e)=>setFilmeG(e)}
                />

                <Text>Gênero</Text>
                <TextInput
                    value={generoG}
                    style={styles.caixaGet}
                    onChangeText={(e)=>setGeneroG(e)}
                />

              <View>
                <View>
                  <Text>Ano</Text>
                    <TextInput
                        value={anoG}
                        style={styles.caixaGet}
                        onChangeText={(e)=>setAnoG(e)}
                    />

                    <Text>Idioma</Text>
                    <TextInput
                        value={idiomaG}
                        style={styles.caixaGet}
                        onChangeText={(e)=>setIdiomaG(e)}
                    />

                    <Text>Classificação</Text>
                    <TextInput
                        value={classifG}
                        style={styles.caixaGet}
                        onChangeText={(e)=>setClassifG(e)}
                    />
                </View>

                <View>
                  <View
                    style={styles.img}
                  >

                  </View>
                </View>
               
              </View>
                
            
          </View>
    
          <View style={styles.stPost}>
            
            <Pressable
                style={styles.btn}
                onPress={enviar}

              >
                <Text style={{ fontWeight: 'bold', }}>POST</Text>
            </Pressable>

            <Text>Filme</Text>
            <TextInput
              value={filme}
              onChangeText={(e) => { setFilme(e) }}
              style={styles.caixaPost}
            />

            <Text>Gênero</Text>
            <TextInput
              value={genero}
              onChangeText={(e) => { setGenero(e) }}
              style={styles.caixaPost}
            />

            <Text>Ano</Text>
            <TextInput
              value={ano}
              onChangeText={(e) => { setAno(e) }}
              style={styles.caixaPost}
            />

            <Text>Idioma</Text>
            <TextInput
              value={idioma}
              onChangeText={(e) => { setIdioma(e) }}
              style={styles.caixaPost}
            />

            <Text>Classificação</Text>
            <TextInput
              value={classif}
              onChangeText={(e) => { setClassif(e) }}
              style={styles.caixaPost}
            />
          </View>
        </View>
      )
}
