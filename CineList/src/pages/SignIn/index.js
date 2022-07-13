import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function SignIn(){
    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader }>
                <Text style={styles.textoBoasVindas}>Bem vindo!</Text>
            </Animatable.View>
            
            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Entre com um email...'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Sua senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonTextLogin}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.buttonTextRegister}>Cadastre-se agora</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}


const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2a2a2a'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    textoBoasVindas:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: '#8B8C8A',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 18,
        marginTop: 28,
    },
    input:{
        borderBottomWidth:1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buttonLogin:{
        backgroundColor: "#2a2a2a",
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextLogin:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    buttonTextRegister:{
        color: '#C0C0C0'
    }
})