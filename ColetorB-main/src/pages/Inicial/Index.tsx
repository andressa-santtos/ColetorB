import React from 'react'
import { Text, View, Image } from 'react-native'
import * as animatable from 'react-native-animatable'

import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import { ButtonMediun, ButtonLink } from "../../components/Default"
import { styles } from "../../components/css"
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function Inicial({ navigation }:NativeStackScreenProps<any,any>){
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image 
                    source={require('../../assets/icons/img/Logo.png')} 
                    style={styles.imageForeground}
                    resizeMode='contain'
                /> 
                <View style={styles.containerText}>
                    <View style={styles.containerTitulo}>
                        <Text style={styles.titulo}>
                            Descarte Corretamente.{"\n"}
                            Entrou, Achou!
                        </Text>
                    </View>
                    <Text style={styles.subTitulo}>
                        Ajudando a encontrar o coletor mais próximo{"\n"}
                        de sua residência 
                    </Text>
                </View>
            </View>
            <animatable.View animation="fadeInUp" delay={100} style={styles.containerAreaBranca}>
                <Text style={styles.subTitulo}>
                    Clique em Acessar para Começar.
                </Text>
                <ButtonMediun
                    onPress={() => {navigation.navigate('TipoLogin')}}
                    text='Acessar'
                    textColor={colors.Primary.White}
                    textFont={fonts.Roboto.r400}
                    color={colors.Primary.Green.basic}
                    hover={colors.Primary.Green.hover}
                />
                
                <ButtonLink
                    text='Deseja Criar uma Conta?'
                    onPress={() => {navigation.navigate('TipoCadastro')}}
                    textColor={colors.Primary.Black}
                    textFont={fonts.Roboto.r300}
                />
            </animatable.View>
        </View>
    );
};
    
export default Inicial;
