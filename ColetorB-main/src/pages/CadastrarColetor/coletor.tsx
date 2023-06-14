
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, Alert, ToastAndroid, NativeModules } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as animatable from 'react-native-animatable';
import fonts from '../../assets/fonts/Roboto/fonts';
import colors from '../../services/colors';
import { ButtonSmall, PickerButton } from '../../components/Default';
import { styles } from '../../components/css';
import { useNavigation } from '@react-navigation/native';
import Coletor from '../PrincipalColetor/coletor';
import axios from "axios";
import { Header } from '../../helpers/imagemLoad';
import api from '../../assets/config/configApi';



export default function CadastrarColetor() {
    const [coletor, setColetor] = useState('');
    const [telefone_coletor, setTelefoneColetor] = useState('');
    const [cpf_coletor, setCpfColetor] = useState('');
    const [email_coletor, setEmailColetor] = useState('');
    const [senha_coletor, setSenhaColetor] = useState('');
    const [rua_coletor, setRuaColetor] = useState('');
    const [numero_coletor, setNumeroColetor] = useState('');
    const [complemento_coletor, setComplementoColetor] = useState('');
    const [bairro_coletor, setBairroColetor] = useState('');
    const [cidade_coletor, setCidadeColetor] = useState('');
    const [cep_coletor, setCepColetor] = useState('');
    const [estado_coletor, setEstadoColetor] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });
    const cpfRef = useRef(null);

    function limpar() {
        setColetor('');
        setTelefoneColetor('');
        setCpfColetor('');
        setEmailColetor('');
        setSenhaColetor('');
        setRuaColetor('');
        setNumeroColetor('');
        setComplementoColetor('');
        setBairroColetor('');
        setCidadeColetor('');
        setCepColetor('');
        setEstadoColetor('');
        setImage('');
    }

    const uploadImage = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        const headers = {
            'headers': {
                'Content-Type': 'application/jsom',
            }
        }

        await api.post("/upload-image", formData, headers)
            .then((response) => {
                setStatus({
                    type: 'sucess',
                    mensagem: response.data.messagem
                });
            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'erro',
                        mensagem: err.response.data.messagem
                    })
                }
            })
    }


    useEffect(() => {
        uploadImage;
    }, []);


    function validar() {
        //verificando se os campos estão preenchidos 
        if (
            !coletor ||
            !telefone_coletor ||
            !cpf_coletor ||
            !email_coletor ||
            !senha_coletor ||
            !rua_coletor ||
            !numero_coletor ||
            !complemento_coletor ||
            !bairro_coletor ||
            !cidade_coletor ||
            !cep_coletor ||
            !estado_coletor ||
            !image
        ) {
            alert("Por favor, preencha todos os campos obrigatórios")
            return false;
        }
        return true;
    }

    async function cadastroColetor(ev: { preventDefault: () => void }) {
        ev.preventDefault();

        if (!validar()) {
            return;
        }

        try {

            await axios.post('http://localhost:3000/coletor/', {
                coletor: coletor,
                email_coletor,
                senha_coletor,
                telefone_coletor,
                cpf_coletor,
                rua_coletor,
                numero_coletor,
                complemento_coletor,
                bairro_coletor,
                cidade_coletor,
                cep_coletor,
                estado_coletor,
                image,

            });

            console.log(Response);
            limpar();
            useNavigation == (Coletor);
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
                    <View style={styles.imgContainer}>
                        <Image style={styles.image} source={image ? { uri: image } : require('../../assets/icons/img/addUser.png')} />
                        <input type="file" name="image" onChange={uploadImage} />
                        {status.type == 'sucesse' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
                        {status.type == 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
                    </View>

                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="name"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite seu Nome Completo...'
                        value={coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setColetor(texto) }}
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
                        value={telefone_coletor}
                        onChangeText={(texto) => { setTelefoneColetor(texto) }}
                    />

                    <Text style={styles.label}>CPF</Text>
                    <TextInputMask
                        style={styles.Input}
                        type={'cpf'}
                        placeholder='Digite seu CPF...'
                        value={cpf_coletor}
                        onChangeText={(texto) => { setCpfColetor(texto) }}
                        ref={cpfRef}
                    />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite seu Email...'
                        value={email_coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setEmailColetor(texto) }}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="newPassword"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite usua Senha...'
                        value={senha_coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setSenhaColetor(texto) }}
                    />

                    <Text style={styles.label}>Rua</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite o nome da sua Rua...'
                        value={rua_coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setRuaColetor(texto) }}
                    />
                    <Text style={styles.label}>Número</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite o número da sua Casa...'
                        value={numero_coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setNumeroColetor(texto) }}
                    />
                    <Text style={styles.label}>Complemento</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Complemento'
                        value={complemento_coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setComplementoColetor(texto) }}
                    />
                    <Text style={styles.label}>Bairro</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite seu Bairro'
                        value={bairro_coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setBairroColetor(texto) }}
                    />
                    <Text style={styles.label}>Cidade</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite sua Cidade'
                        value={cidade_coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setCidadeColetor(texto) }}
                    />
                    <Text style={styles.label}>CEP</Text>
                    <TextInputMask
                        style={styles.Input}
                        type={'zip-code'}
                        placeholder='Digite seu CEP'
                        value={cep_coletor}
                        onChangeText={(texto) => { setCepColetor(texto) }}
                    />

                    <Text style={styles.label}>Estado</Text>
                    <TextInput
                        keyboardType="default"
                        textContentType="fullStreetAddress"
                        autoCapitalize="none"
                        style={styles.Input}
                        placeholder='Digite seu Estado'
                        value={estado_coletor}
                        autoCorrect={false}
                        onChangeText={(texto) => { setEstadoColetor(texto) }}
                    />

                </ScrollView>

                <ButtonSmall
                    text='Salvar'
                    onPress={cadastroColetor}
                    textColor={colors.Primary.White}
                    textFont={fonts.Roboto.r400}
                    color={colors.Primary.Green.basic}
                    hover={colors.Primary.Green.hover}
                />
            </animatable.View>
        </View>
    );
};
