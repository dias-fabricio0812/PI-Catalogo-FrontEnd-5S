import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function AddBook() {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    const handleAddBook = () => {
        Alert.alert('Livro Adicionado', `Título: ${title}\nAutor: ${author}\nGênero: ${genre}\nAno: ${year}`);
    };

    return (
        <LinearGradient
            colors={['#3489db', '#5dade2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <View style={styles.subcontainer}>
                <Text style={styles.title}>Adicionar Livro</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Título'
                    placeholderTextColor='#BDC3C7'
                    onChangeText={setTitle}
                    value={title}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Autor'
                    placeholderTextColor='#BDC3C7'
                    onChangeText={setAuthor}
                    value={author}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Gênero'
                    placeholderTextColor='#BDC3C7'
                    onChangeText={setGenre}
                    value={genre}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Ano'
                    placeholderTextColor='#BDC3C7'
                    keyboardType='numeric'
                    onChangeText={setYear}
                    value={year}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddBook}>
                    <Text style={styles.buttonText}>Adicionar</Text>
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
        width: '85%',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#BDC3C7',
        color: '#fff',
        fontSize: 18,
        marginBottom: 20,
        paddingVertical: 10
    },
    button: {
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
    }
});
