import React,{useState,useEffect} from 'react'
import { Text, View, Image, TextInput,ScrollView } from 'react-native'
import * as animatable from 'react-native-animatable'
import fonts from '../../assets/fonts/Roboto/fonts'
import colors from '../../services/colors'
import { ButtonSmall } from '../../components/Default'
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function Alterar({ navigation, route }:NativeStackScreenProps<any,any>){
    const { inputCPF } = route.params?.coletor || { inputCPF: null };
    const [inputEmail, setInputEmail] = useState('');
    const [inputSenha, setInputSenha] = useState('');
    const [inputTelefone, setInputTelefone] = useState('');
    const [inputCPeF, setInputCPF] = useState('');
    const [inputEndereco, setInputEndereco] = useState('');
    const [inputNome, setInputNome] = useState('');

    useEffect(() =>{
        setTimeout(() => {alert("coletor:" + JSON.stringify(route.params))}, 1000);
    }, []);

    let params = {
        email:inputEmail,
        senha:inputSenha,
        telefone:inputTelefone,
        cpf:inputCPF,
        endereco:inputEndereco,
        nome:inputNome,
    }
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
                        keyboardType="default"
                        textContentType="name"
                        autoCapitalize="none"
                        value={inputNome}
                        autoCorrect={false}
                        onChangeText={(texto) => {setInputNome(texto)}}
                        placeholder='Digite um Nome...'
                        style={styles.Input}
                    />
                    <Text style={styles.label}>Telefone</Text>
                    <TextInput
                        keyboardType="phone-pad"
                        textContentType="telephoneNumber"
                        autoCapitalize="none"
                        value={inputTelefone}
                        autoCorrect={false}
                        onChangeText={(texto) => {setInputTelefone(texto)}}
                        placeholder='Digite um Telefone...'
                        style={styles.Input}
                    />
                    {
                        route.params?.coletor === true &&
                        <View>
                                <Text style={styles.label}>CPF</Text>
                                <TextInput
                                    keyboardType="number-pad"
                                    textContentType="none"
                                    autoCapitalize="none"
                                    value={inputCPF}
                                    autoCorrect={false}
                                    onChangeText={(texto) => {inputCPF(texto)}}
                                    placeholder='Digite um CPF...'
                                    style={styles.Input}
                                />
                        </View>
                    }
                    
                     <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        value={inputEmail}
                        autoCorrect={false}
                        onChangeText={(texto) => {setInputEmail(texto)}}
                        placeholder='Digite um Email...'
                        style={styles.Input}
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="newPassword"
                        autoCapitalize="none"
                        value={inputSenha}
                        autoCorrect={false}
                        onChangeText={(texto) => {setInputSenha(texto)}}
                        placeholder='Digite uma Senha...'
                        style={styles.Input}
                    />
                     <Text style={styles.label}>Endereço</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        value={inputEndereco}
                        autoCorrect={false}
                        onChangeText={(texto) => {setInputEndereco(texto)}}
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