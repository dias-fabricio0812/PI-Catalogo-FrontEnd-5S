import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

export default function AdicionarLivro() {
    const navigation = useNavigation();
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [anoPublicacao, setAnoPublicacao] = useState('');

    const adicionarLivro = () => {
        // Aqui você deve enviar os dados para o backend para salvar o novo livro no banco de dados
        // Após o sucesso, você pode redirecionar de volta para a tela principal
        navigation.goBack(); // Isso vai voltar para a tela anterior (tela principal)
    };

    return (
        <LinearGradient
            colors={['#3489db', '#5dade2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
            <View style={styles.subcontainer}>
                <Image
                    style={styles.logo}
                    source={require('../../images/logo.png')}
                    resizeMode='contain'
                />
                <Text style={styles.title}>Adicionar Livro</Text>

                <Text style={styles.label}>Título:</Text>
                <TextInput
                    style={styles.input}
                    value={titulo}
                    onChangeText={text => setTitulo(text)}
                />

                <Text style={styles.label}>Autor:</Text>
                <TextInput
                    style={styles.input}
                    value={autor}
                    onChangeText={text => setAutor(text)}
                />

                <Text style={styles.label}>Gênero:</Text>
                <TextInput
                    style={styles.input}
                    value={genero}
                    onChangeText={text => setGenero(text)}
                />

                <Text style={styles.label}>Ano de Publicação:</Text>
                <TextInput
                    style={styles.input}
                    value={anoPublicacao}
                    onChangeText={text => setAnoPublicacao(text)}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={adicionarLivro}>
                    <Text style={styles.buttonText}>Adicionar Livro</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subcontainer: {
        flex: 1,
        width: '85%',
        alignItems: 'center',
        paddingTop: 50 // Ajuste para alinhar ao logo
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff'
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#fff'
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#2980b9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1 // Para garantir que fique sobreposta ao Linear Gradient
    }
});