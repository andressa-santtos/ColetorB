import React,{useState} from 'react'
import { Text, View, Image} from 'react-native'
import * as animatable from 'react-native-animatable'
import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import { ButtonSmall, ButtonLink } from '../../components/Default'
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginDoador from '../LoginDoador/Index'
import LoginColetor from '../LoginColetor/Index'

function TipoLogin({ navigation }:NativeStackScreenProps<any,any>){
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
                <View style={styles.containerFluid}>
                   
                    <Text style={styles.boxTextCenter}>Entrar como Coletor</Text>
                    <ButtonSmall
                        text='Coletor'
                        onPress={() => {navigation.navigate('LoginColetor',(LoginColetor))}}
                        textColor={colors.Primary.White}
                        textFont={fonts.Roboto.r400}
                        color={colors.Primary.Green.basic}
                        hover={colors.Primary.Green.hover}
                    />
                    
                    <Text style={styles.boxTextCenter}>Entrar como Doador</Text>
                    <ButtonSmall
                        text='Doador'
                        onPress={() => {navigation.navigate('LoginDoador',(LoginDoador))}}
                        textColor={colors.Primary.White}
                        textFont={fonts.Roboto.r400}
                        color={colors.Primary.Green.basic}
                        hover={colors.Primary.Green.hover}
                    />

                </View>

               
            </animatable.View>
        </View>
    );
};
  
export default TipoLogin;
