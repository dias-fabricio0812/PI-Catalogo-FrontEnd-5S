import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

export default function Login(){
    const navigation = useNavigation()

    return(
        <LinearGradient
            colors={['#3489db', '#5dade2'] }
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.iconArea}>
                        <TouchableOpacity onPress={ () => navigation.navigate('Welcome') }>
                            <Feather
                                name='arrow-left'
                                size={50} 
                                color='#fff'
                            />
                        </TouchableOpacity>

                        <Image
                            style={styles.image}
                            source={require('../../logo.png')}
                            resizeMode='contain'
                        />
                    </View>

                    <View style={styles.titleArea}>
                        <Text style={styles.title}>
                            Coloque seus dados
                        </Text>
                        <Text style={styles.title}>
                            para acessar!
                        </Text>
                    </View>

                    <View style={styles.emailArea}>
                        <Text style={styles.emailText}>E-mail</Text>
                        <TextInput
                            style={styles.emailPlaceholder}
                            placeholder='Digite seu e-mail'
                            placeholderTextColor='#BDC3C7'
                        />
                    </View>
                    <View style={styles.passwordArea}>
                        <Text style={styles.passwordText}>Senha</Text>
                        <TextInput
                            style={styles.passwordPlaceholder}
                            placeholder='Digite sua senha'
                            placeholderTextColor='#BDC3C7'
                        />
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={ () => navigation.navigate('Login') } >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.registerButton} onPress={ () => navigation.navigate('Register') } >
                        <Text style={[styles.registerText]}>Ainda não tem uma conta?</Text>
                        <Text style={[styles.registerText]}>Crie uma agora!</Text>
                    </TouchableOpacity>
                </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    subcontainer:{
       flex:1,
       width:'85%',
       alignItems:'center' 
     },
     iconArea:{
        width:'100%',
        height:80,
        marginTop:'10%',
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
     },
     image:{
        width:80,
        height:80,
     },
     titleArea:{
        marginTop:'35%',
        justifyContent:'center',
        alignItems:'center'
    },
     title:{
        fontSize:36,
        fontWeight:'bold',
        color:'#fff',
        alignItems:'center'
     },
     emailArea:{
        width:'100%',
        marginTop:'15%'
     },
     emailText:{
        marginTop:'-10%',
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
     },
     emailPlaceholder:{
        fontSize:16,
        borderBottomWidth:1,
        borderColor:'#BDC3C7',
        color:'#fff'
     },
     passwordArea:{
        width:'100%',
        marginTop:'15%',
     },
     passwordText:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
     },
     passwordPlaceholder:{
        fontSize:16,
        borderBottomWidth:1,
        borderColor:'#BDC3C7',
        color:'#fff'
     },
     loginButton:{
       marginTop:'10%',
       backgroundColor:'#2c3e50',
       width:235,
       height:60,
       borderRadius:30,
       justifyContent:'center',
       alignItems:'center'
     },
     buttonText:{   
       fontSize:24,
       fontWeight:'bold',
       color:'#fff'
     },
     registerButton:{
       justifyContent:'center',
       alignItems:'center'
     },
     registerText:{
       color:'#ecf0f1',
       textAlign:'center', 
       fontSize:16,
       marginTop:5
     }
})