import React, { useState, useLayoutEffect } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import * as animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons'
import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import { ButtonLink, ButtonSmall } from '../../components/Default'
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import axios, { AxiosRequestConfig } from 'axios';
import { LogBox } from 'react-native';
import PrincipalColetor from '../PrincipalColetor/coletor'
LogBox.ignoreLogs


export default function Login({ navigation }: NativeStackScreenProps<any, any>) {
    const [email_coletor, setEmail_coletor] = useState("");
    const [senha_coletor, setSenha_coletor] = useState("");
    const [hideIconPass, setHideIconPass] = useState(true);


    const login = async () => {
        try {
            const getColetor = await axios.get('http://localhost:3000/coletor/verificar-login', {
                params: {
                    senha_coletor: senha_coletor,
                    email_coletor: email_coletor,
                }
            });


            if (getColetor.data && getColetor.data.length > 0) {
                console.log(getColetor.data);
                alert('Bem-vindo Coletor');
                navigation.navigate('PrincipalColetor');
            } else {
                alert('Credenciais inválidas');
            }
        } catch (error) {
            console.error(error);
            alert('Ocorreu um erro ao fazer login');
        }
    };



    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../../assets/icons/img/Logo.png')}
                    style={styles.imageForegroundSmall}
                    resizeMode='contain'
                />
                <animatable.View animation="fadeInLeft" delay={500} style={styles.containerText}>
                    <Text style={styles.tituloAlternative}>
                        Bem-Vindo, Coletor!
                    </Text>
                </animatable.View>
            </View>

            <animatable.View animation="fadeInUp" delay={100} style={styles.containerForm}>
                <View style={styles.form}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite um Email...'
                        value={email_coletor}
                        autoCorrect={false}
                        onChangeText={(value) => { setEmail_coletor(value) }}

                    />
                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.Area}>
                        <TextInput
                            textContentType="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='Digite um Senha...'
                            style={styles.Input}
                            value={senha_coletor}
                            onChangeText={(value) => setSenha_coletor(value)}
                            secureTextEntry={hideIconPass}
                        />
                        <TouchableOpacity style={styles.Icon} onPress={() => setHideIconPass(!hideIconPass)}>
                            {hideIconPass ?
                                <Ionicons name='eye' color="#000" size={25} />
                                :
                                <Ionicons name='eye-off' color={colors.Primary.Black} size={25} />
                            }
                        </TouchableOpacity>
                    </View>

                </View>

                <ButtonSmall
                    text='Entrar'
                    onPress={login}
                    textColor={colors.Primary.White}
                    textFont={fonts.Roboto.r400}
                    color={colors.Primary.Green.basic}
                    hover={colors.Primary.Green.hover}
                />
                <ButtonLink
                    onPress={() => { navigation.navigate('RecuperarSenha') }}
                    text='Esqueceu a Senha?'
                    textColor={colors.Primary.Black}
                    textFont={fonts.Roboto.r300}
                />


            </animatable.View>
        </View>
    );
};

