import React, { useState, useEffect} from 'react'
import { View, Image,TouchableOpacity,Text } from 'react-native'
import * as animatable from 'react-native-animatable'
import { FontAwesome, FontAwesome5  } from '@expo/vector-icons'
import { Snackbar } from 'react-native-paper';
import Maps from "../../helpers/mapsLoad"
import colors from '../../services/colors'
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function PrincipalDoador({ navigation, route }:NativeStackScreenProps<any,any>){
    useEffect(() =>{
        setTimeout(() => {alert("Bem vindo:" + JSON.stringify(route.params))}, 1000);
    }, []);
    let doador = route.params?.valores.doador;
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image 
                    source={require('../../assets/icons/img/Logo.png')} 
                    style={styles.imageForegroundSmall}
                    resizeMode='contain'
                />
            </View>

            <animatable.View animation="fadeInUp" style={styles.containerForm}>
            
                <animatable.View animation="fadeInUp" delay={500} style={styles.containerButtonAction}>
                    <TouchableOpacity style={styles.buttonAction} onPress={() => {navigation.navigate('Coleta')}}>
                        <FontAwesome name="send" size={25} color={colors.Primary.White}/>
                        <Text style={styles.iconTitulo}>Coleta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAction} onPress={() => {navigation.navigate('Alterar',{doador:doador})}}>
                        <FontAwesome5 name="user-alt" size={25} color={colors.Primary.White} />
                        <Text style={styles.iconTitulo}>Perfil</Text>
                    </TouchableOpacity>
                </animatable.View>
            </animatable.View>
        </View>
    );
};
    
export default PrincipalDoador;