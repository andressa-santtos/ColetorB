import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as animatable from 'react-native-animatable';
import fonts from '../../assets/fonts/Roboto/fonts';
import colors from '../../services/colors';
import { ButtonSmall } from '../../components/Default';
import { styles } from '../../components/css';
import { useNavigation } from '@react-navigation/native';
import Doador from '../PrincipalDoador/doador';
import axios from "axios";


export default function CadastrarDoador() {
    const [doador, setDoador] = useState('');
    const [telefone_doador, setTelefoneDoador] = useState('');
    const [email_doador, setEmailDoador] = useState('');
    const [senha_doador, setSenhaDoador] = useState('');
    const [rua_doador, setRuaDoador] = useState('');
    const [numero_doador, setNumeroDoador] = useState('');
    const [complemento_doador, setComplementoDoador] = useState('');
    const [bairro_doador, setBairroDoador] = useState('');
    const [cidade_doador, setCidadeDoador] = useState('');
    const [cep_doador, setCepDoador] = useState('');
    const [estado_doador, setEstadoDoador] = useState('');

    function limpar() {
        setDoador('');
        setTelefoneDoador('');
        setEmailDoador('');
        setSenhaDoador('');
        setRuaDoador('');
        setNumeroDoador('');
        setComplementoDoador('');
        setBairroDoador('');
        setCidadeDoador('');
        setCepDoador('');
        setEstadoDoador('');
    }
    
    function validar() {
        //verificando se os campos estão preenchidos 
        if (
            !doador ||
            !telefone_doador ||
            !email_doador ||
            !senha_doador ||
            !rua_doador ||
            !numero_doador ||
            !bairro_doador ||
            !cidade_doador ||
            !cep_doador ||
            !estado_doador
        ) {
            alert("Por favor, preencha todos os campos obrigatórios")
            return false;
        }
        return true;
    }



    async function cadastroDoador(ev: { preventDefault: () => void }) {
        ev.preventDefault();

        if (!validar()) {
            return;
        }

        try {
            await axios.post('http://localhost:3000/doador/', {
                doador,
                email_doador,
                senha_doador,
                telefone_doador,
                rua_doador,
                numero_doador,
                complemento_doador,
                bairro_doador,
                cidade_doador,
                cep_doador,
                estado_doador,
            });

            console.log(Response);
            limpar();
            useNavigation == (Doador);
            Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o doador. Por favor, tente novamente mais tarde.');
        }

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
                        style={styles.Input}
                        placeholder='Digite seu Nome...'
                        value={doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setDoador(texto) }}
                    />

                    <Text style={styles.label}>Telefone</Text>
                    <TextInputMask
                        style={styles.Input}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        placeholder='Digite seu Telefone...'
                        value={telefone_doador}
                        onChangeText={(texto) => { setTelefoneDoador(texto) }}
                    />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite seu Email...'
                        value={email_doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setEmailDoador(texto) }}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="newPassword"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite usua Senha...'
                        value={senha_doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setSenhaDoador(texto) }}
                    />

                    <Text style={styles.label}>Rua</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite o nome da sua Rua...'
                        value={rua_doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setRuaDoador(texto) }}
                    />

                    <Text style={styles.label}>Número</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite o número da sua Casa...'
                        value={numero_doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setNumeroDoador(texto) }}
                    />

                    <Text style={styles.label}>Complemento</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Complemento'
                        value={complemento_doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setComplementoDoador(texto) }}
                    />
                    <Text style={styles.label}>Bairro</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite seu Bairro'
                        value={bairro_doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setBairroDoador(texto) }}
                    />
                    <Text style={styles.label}>Cidade</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite sua Cidade'
                        value={cidade_doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setCidadeDoador(texto) }}
                    />
                    <Text style={styles.label}>CEP</Text>
                    <TextInputMask
                        style={styles.Input}
                        type={'zip-code'}
                        placeholder='Digite seu CEP'
                        value={cep_doador}
                        onChangeText={(texto) => { setCepDoador(texto) }}
                    />
                    <Text style={styles.label}>Estado</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite seu Estado'
                        value={estado_doador}
                        autoCorrect={false}
                        onChangeText={(texto) => { setEstadoDoador(texto) }}
                    />

                </ScrollView>

                <ButtonSmall
                    text='Salvar'
                    onPress={cadastroDoador}
                    textColor={colors.Primary.White}
                    textFont={fonts.Roboto.r400}
                    color={colors.Primary.Green.basic}
                    hover={colors.Primary.Green.hover}
                />
            </animatable.View>
        </View>
    );
};
