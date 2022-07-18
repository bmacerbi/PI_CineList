import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView, 
    Image,
    ScrollView
} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function Perfil(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Ionicons name='ios-arrow-back' size={24} color='#ffff'></Ionicons>
                    <Ionicons name='ios-arrow-back' size={24} color='#ffff'></Ionicons>
                </View>

                <View style = {{ alignSelf: "center"}}>
                    <View style={styles.profilePicture}>
                        <Image source={require("../../assets/icon.jpg")} 
                            style={styles.image} 
                            resizeMode="center"></Image>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#2a2a2a"
    },
    image:{
        flex: 2,
        width: undefined,
        height: undefined,
        backgroundColor: '#2a2a2a'
    },
    profilePicture:{
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
})