import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import { Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';


export default function Registro() {

    const navigation = useNavigation()
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = () => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                console.log(user)
                Alert.alert('Criação de conta', 'Conta criada com sucesso!', [
                    {text: 'Continuar', onPress: () => console.log('Continue Pressed')},
                ]);
                navigation.navigate('Home')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                Alert.alert('Criação de conta', errorMessage, [
                    {text: 'Ok', onPress: () => console.log('Ok Pressed')},
                ]);
                // ..
            });
    }

    return (
        <LinearGradient
            colors={['#3489db', '#5dade2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.iconArea}>
                    <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                        <Feather
                            name='arrow-left'
                            size={50}
                            color='#fff'
                        />
                    </TouchableOpacity>

                    <Image
                        style={styles.image}
                        source={require('../../images/logo.png')}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.titleArea}>
                    <Text style={styles.title}>
                        Coloque seus dados
                    </Text>
                    <Text style={styles.title}>
                        para se registrar!
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.nameArea}>
                        <Text style={styles.nameText}>Nome completo</Text>
                        <TextInput
                            style={styles.namePlaceholder}
                            placeholder='Digite seu nome'
                            placeholderTextColor='#BDC3C7'
                        />
                    </View>
                    <View style={styles.emailArea}>
                        <Text style={styles.emailText}>E-mail</Text>
                        <TextInput
                            style={styles.emailPlaceholder}
                            placeholder='Digite seu e-mail'
                            placeholderTextColor='#BDC3C7'
                            onChangeText={(val) => {
                                setEmail(val)
                            }}
                        />
                    </View>
                    <View style={styles.passwordArea}>
                        <Text style={styles.passwordText}>Senha</Text>
                        <TextInput
                            style={styles.passwordPlaceholder}
                            placeholder='Digite sua senha'
                            placeholderTextColor='#BDC3C7'
                            secureTextEntry={true}
                            onChangeText={(val) => {
                                setPassword(val)
                            }}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin} >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Login')} >
                    <Text style={[styles.registerText]}>Já tem uma conta? Entre aqui!</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subcontainer: {
        width: '85%',
        alignItems: 'center'
    },
    iconArea: {
        width: '100%',
        height: 80,
        marginTop: '10%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
    },
    titleArea: {
        marginTop: '35%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        height: '40%',
        marginTop: '5%'
    },
    nameArea: {
        width: '100%'
    },
    nameText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    namePlaceholder: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#BDC3C7',
        color: '#fff'
    },
    emailArea: {
        width: '100%',
        marginTop: '5%'
    },
    emailText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    emailPlaceholder: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#BDC3C7',
        color: '#fff'
    },
    passwordArea: {
        width: '100%',
        marginTop: '5%'
    },
    passwordText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    passwordPlaceholder: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#BDC3C7',
        color: '#fff'
    },
    loginButton: {
        marginTop: '10%',
        backgroundColor: '#2c3e50',
        width: 235,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    registerButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        color: '#ecf0f1',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5
    }
})