import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Login(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Text>Página de Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})