import React from 'react'
import { Text, View, Image, TextInput,ScrollView } from 'react-native'
import * as animatable from 'react-native-animatable'
import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import { ButtonSmall } from '../../components/Default'
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function Alterar({ navigation }:NativeStackScreenProps<any,any>){
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
                <ScrollView style={styles.form}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        placeholder='Digite um Nome...'
                        style={styles.Input}
                    />
                    <Text style={styles.label}>Telefone</Text>
                    <TextInput
                        placeholder='Digite um Telefone...'
                        style={styles.Input}
                    />
                    <Text style={styles.label}>CPF</Text>
                    <TextInput
                        placeholder='Digite um Email...'
                        style={styles.Input}
                    />
                     <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        placeholder='Digite um Email...'
                        style={styles.Input}
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder='Digite uma Senha...'
                        style={styles.Input}
                    />
                     <Text style={styles.label}>Endereço</Text>
                    <TextInput
                        placeholder='Digite um Endereço...'
                        style={styles.Input}
                    />
                </ScrollView>
    
                <ButtonSmall
                    onPress={() => {navigation.goBack()}}
                    text='Alterar'
                    textColor={colors.Primary.White}
                    textFont={fonts.Roboto.r400}
                    color={colors.Primary.Green.basic}
                    hover={colors.Primary.Green.hover}
                />
            </animatable.View>
        </View>
    );
};


export default Alterar;