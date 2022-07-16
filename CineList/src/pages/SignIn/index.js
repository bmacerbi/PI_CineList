import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function SignIn(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader }>
                <Text style={styles.textoBoasVindas}>Bem vindo!</Text>
            </Animatable.View>
            
            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder='Entre com um e-mail...'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Sua senha'
                    style={styles.input}
                />

                <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => navigation.navigate('Perfil')}>
                    <Text style={styles.buttonTextLogin}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('SignUp')}>
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
        backgroundColor: '#fff',
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