import React from 'react'
import { Text, View, Image} from 'react-native'
import * as animatable from 'react-native-animatable'

import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import { ButtonSmall } from '../../components/Default'
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function TipoCadastro({ navigation }:NativeStackScreenProps<any,any>){
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
                   
                    <Text style={styles.boxTextCenter}>Cadastrar como Coletor</Text>
                    <ButtonSmall
                        onPress={() => {navigation.navigate('Cadastrar')}}
                        text='Coletor'
                        textColor={colors.Primary.White}
                        textFont={fonts.Roboto.r400}
                        color={colors.Primary.Green.basic}
                        hover={colors.Primary.Green.hover}
                    />
                    
                    <Text style={styles.boxTextCenter}>Cadastrar como Doador</Text>
                    <ButtonSmall
                        onPress={() => {navigation.navigate('Cadastrar')}}
                        text='Doador'
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
    
export default TipoCadastro;
