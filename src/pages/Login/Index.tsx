import React, {useState} from 'react'
import { Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import * as animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons'

import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import { ButtonLink,ButtonSmall } from '../../components/Default'
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function Login({ navigation }:NativeStackScreenProps<any,any>){
    const [inputPassword, setInputPassword] = useState('');
    const [hideIconPass, setHideIconPass] = useState(true);
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
                        Bem-Vindo(a)
                    </Text>
                </animatable.View> 
            </View>

            <animatable.View animation="fadeInUp" delay={100} style={styles.containerForm}>
                <View style={styles.form}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        placeholder='Digite um Email...'
                        style={styles.Input}
                    />
                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.Area}>
                        <TextInput
                            placeholder='Digite um Senha...'
                            style={styles.Input}
                            value={inputPassword}
                            onChangeText={ (texto) => setInputPassword(texto)}
                            secureTextEntry={hideIconPass}
                        />
                        <TouchableOpacity style={styles.Icon} onPress={ () => setHideIconPass(!hideIconPass)}>
                            { hideIconPass ?
                                <Ionicons name='eye' color="#000" size={25}/>
                                :
                                <Ionicons name='eye-off' color={colors.Primary.Black} size={25}/>
                            }    
                        </TouchableOpacity>
                    </View>
                </View>
    
                <ButtonSmall
                    onPress={() => {navigation.navigate('Principal')}}
                    text='Entrar'
                    textColor={colors.Primary.White}
                    textFont={fonts.Roboto.r400}
                    color={colors.Primary.Green.basic}
                    hover={colors.Primary.Green.hover}
                />
                <ButtonLink
                    onPress={() => {navigation.navigate('TipoCadastro')}}
                    text='Deseja Criar uma Conta?'
                    textColor={colors.Primary.Black}
                    textFont={fonts.Roboto.r300}
                />
                <ButtonLink
                    onPress={() => {navigation.navigate('RecuperarSenha')}}
                    text='Esqueceu a Senha?'
                    textColor={colors.Primary.Black}
                    textFont={fonts.Roboto.r300}
                />

            </animatable.View>
        </View>
    );
};
    
export default Login;
