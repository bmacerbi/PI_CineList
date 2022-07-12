import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default function Welcome(){
    return(
        <View style = {styles.container}>
            <View style={styles.containerLogo}>
                <Image 
                    source={require('../../assets/logo3.png')}
                    style={{ width: '100%'}}
                    resizeMode = "contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Nunca foi tão fácil organizar seus filmes e séries!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar Agora</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2a2a2a'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#2a2a2a',
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#8B8C8A',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom:12
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#2a2a2a',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#8B8C8A',
        fontWeight: 'bold'
    }
})