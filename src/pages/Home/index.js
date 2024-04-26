import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'

export default function Home() {
    const navigation = useNavigation()

    return (
        <LinearGradient
            colors={['#3489db', '#5dade2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}>
            <View style={styles.subcontainer}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                    <View style={styles.iconArea}>
                        <Image
                            style={styles.image}
                            source={require('../../images/logo.png')}
                            resizeMode='contain'
                        />
                        <Feather
                            name='user'
                            size={50}
                            color='#fff'
                        />
                    </View>

                    <View style={styles.searchArea}>
                        <Feather
                            name='search'
                            size={30}
                            color='#fff'
                        />
                        <TextInput style={styles.searchPlaceholder}
                            placeholder='Pesquisar'
                            placeholderTextColor='#fff'
                        />
                    </View>

                    <View style={styles.menu}>
                        <TouchableOpacity style={[styles.menuButton, styles.searchButton]} onPress={() => navigation.navigate('AddBook')}>
                            <Feather
                                name='plus'
                                size={30}
                                color='#fff'
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>
                        Biblioteca
                    </Text>

                    <View style={styles.book}>
                        <View style={styles.bookCover}>
                            <Image
                                style={styles.bookCoverImage}
                                source={require('../../images/coraline.jpg')}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.bookContent}>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>Coraline</Text>
                                <Text style={styles.bookSubtitle}>Neil Gaiman</Text>
                            </View>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>Dark Fantasy</Text>
                                <Text style={styles.bookSubtitle}>2017</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View style={styles.bookCover}>
                            <Image
                                style={styles.bookCoverImage}
                                source={require('../../images/thenightocean.jpg')}
                                resizeMode='cover'
                        />
                        </View>
                        <View style={styles.bookContent}>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>The Night Ocean</Text>
                                <Text style={styles.bookSubtitle}>Paul La Farge</Text>
                            </View>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>Mistério</Text>
                                <Text style={styles.bookSubtitle}>2017</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View style={styles.bookCover}>
                            <Image
                                style={styles.bookCoverImage}
                                source={require('../../images/filhaperdida.jpg')}
                                resizeMode='cover'
                        />
                        </View>
                        <View style={styles.bookContent}>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>A Filha Perdida</Text>
                                <Text style={styles.bookSubtitle}>Elena Ferrante</Text>
                            </View>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>Romance</Text>
                                <Text style={styles.bookSubtitle}>2006</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View style={styles.bookCover}>
                            <Image
                                style={styles.bookCoverImage}
                                source={require('../../images/solitaria.jpg')}
                                resizeMode='cover'
                        />
                        </View>
                        <View style={styles.bookContent}>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>Solitária</Text>
                                <Text style={styles.bookSubtitle}>Eliana Alves Cruz</Text>
                            </View>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>Ficção literária</Text>
                                <Text style={styles.bookSubtitle}>2022</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.book}>
                        <View style={styles.bookCover}>
                            <Image
                                style={styles.bookCoverImage}
                                source={require('../../images/cachorra.jpg')}
                                resizeMode='cover'
                        />
                        </View>
                        <View style={styles.bookContent}>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>A Cachorra</Text>
                                <Text style={styles.bookSubtitle}>Pilar Quintana</Text>
                            </View>
                            <View style={styles.contentBlock}>
                                <Text style={styles.bookTitle}>Ficção literária</Text>
                                <Text style={styles.bookSubtitle}>2020</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
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
    },
    scrollContainer: {
        flex: 1,
        width: '100%'
    },
    iconArea: {
        width: '100%',
        height: 80,
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
    },
    searchArea: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '5%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        paddingLeft: '5%'
    },
    searchPlaceholder: {
        marginLeft: '2%',
        fontSize: 18,
        color:'#fff'
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchButton: {
        padding: '3%',
    },
    menuButton: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        padding: '4%',
        marginTop: '10%'
    },
    menuText: {
        color: '#fff',
        fontSize: 18
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        alignItems: 'center',
        marginTop: '5%'
    },
    book:{ 
        width:'100%',
        height:150,
        flexDirection:'row',
        marginBottom:'7%'
    },
    bookCover:{
        width:'30%',
        height:'100%',
        backgroundColor:'gray'
    },
    bookCoverImage:{
            width:'100%',
            height:'100%',
        },
    bookContent:{
        backgroundColor:'#2C3E50',
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
    },
    contentBlock:{
        margin:'4%'
    },
    bookTitle:{
        fontSize: 18,
        color:'#fff',
        fontWeight:'bold'
    },
    bookSubtitle:{
        fontSize: 14,
        color:'#fff',
        fontWeight:'200'
    }
})