import React, {useState} from 'react'
import { Text, View, Image, ScrollView} from 'react-native'
import * as animatable from 'react-native-animatable'
import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import Radio from '../../helpers/radioLoad';
import { ButtonSmall } from '../../components/Default'
import { styles } from '../../components/css'
import { RadioButton  } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

function Coleta({ navigation }:NativeStackScreenProps<any,any>){
    
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
                
                <Text style={styles.boxTextCenter}>Selecione o material que deseja descartar</Text>
                <ScrollView style={styles.form}>
                    <Radio/>
                </ScrollView>

                <ButtonSmall
                    onPress={() => {navigation.navigate('SelecionarColetor')}}
                    text='Salvar'
                    textColor={colors.Primary.White}
                    textFont={fonts.Roboto.r400}
                    color={colors.Primary.Green.basic}
                    hover={colors.Primary.Green.hover}
                />
            </animatable.View>
        </View>
    );
};
    
export default Coleta;
