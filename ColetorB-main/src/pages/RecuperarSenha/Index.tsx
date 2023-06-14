import React, {useState} from 'react'
import { Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import * as animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons'
import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import { ButtonSmall } from '../../components/Default'
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function RecuperarSenha({ navigation }:NativeStackScreenProps<any,any>){
    const [inputPassword, setInputPassword] = useState('');
    const [hideIconPass, setHideIconPass] = useState(true);
    const [inputEmail, setInputEmail] = useState('');
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
                <View style={styles.form}>
                    <Text style={styles.label}>E-mail Novo</Text>
                    <TextInput
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        value={inputEmail}
                        autoCorrect={false}
                        onChangeText={(texto) => {setInputEmail(texto)}}
                        placeholder='Digite um Novo Email...'
                        style={styles.Input}
                    />

                    <Text style={styles.label}>Senha Nova</Text>
                    <View style={styles.Area}>
                        <TextInput
                            textContentType="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='Digite uma Nova Senha...'
                            style={styles.Input}
                            value={inputPassword}
                            onChangeText={ (texto) => setInputPassword(texto)}
                            secureTextEntry={hideIconPass}
                        />
                        <TouchableOpacity style={styles.Icon} onPress={ () => setHideIconPass(!hideIconPass)}>
                            { hideIconPass ?
                                <Ionicons name='eye' color="#000" size={25}/>
                                :
                                <Ionicons name='eye-off' color="#000" size={25}/>
                            }    
                        </TouchableOpacity>
                    </View>
                </View>
    
                <ButtonSmall
                    onPress={() => {navigation.goBack()}}
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
    
export default RecuperarSenha;
