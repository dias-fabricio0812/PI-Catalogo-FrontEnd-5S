import React from 'react'
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <LinearGradient
      colors={['#3489db', '#5dade2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.image}
          source={require('../../images/logo.png')}
          resizeMode='contain'
        />

        <View style={styles.titleArea}>
          <Text style={styles.title}>
            Bem vindo a sua
          </Text>
          <Text style={styles.title}>
            biblioteca virtual
          </Text>
        </View>

        <Text style={styles.text}>
          Acesse a sua biblioteca com apenas um clique!
        </Text>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')} >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')} >
          <Text style={[styles.registerText]}>Ainda não tem uma conta?</Text>
          <Text style={[styles.registerText]}>Crie uma agora!</Text>
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
  image: {
    width: 260,
    height: 261,
    marginTop: '10%'
  },
  titleArea: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff'
  },
  text: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#ecf0f1',
    textAlign: 'center'
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