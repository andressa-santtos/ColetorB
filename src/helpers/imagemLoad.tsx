import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import React from 'react';





export const Header = ({ fetchImages }: { fetchImages: Function }) => {
    const handlePickerImage = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
            Alert.alert(
                'Permissão necessária',
                'Permita que sua aplicação acesse as imagens'
            ); 
        } else {
            const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                base64: false,
                aspect: [4, 4],
                quality: 1,
            });

            if (canceled) {
                ToastAndroid.show('Operação cancelada', ToastAndroid.SHORT);
            } else {

                const filename = assets[0].uri.substring(
                    assets[0].uri.lastIndexOf('/') + 1,
                    assets[0].uri.length
                );

                const extend = filename.split('.')[1];

                const formData = new FormData();
                
                formData.append('foto_coletor', JSON.parse(JSON.stringify({
                    name: filename,
                    uri: assets[0].uri,
                    type: 'image/' + extend,
                })));
                /*

                try {
                    const response = await axios.post('http://localhost:3000/image', formData, {
                        headers: {
                            Accept: 'coletorController/js',
                            'Content-Type': 'multipart/form-data',
                          },
                    });
                    console.log();
                    if (response.data.error) {
                      Alert.alert('Erro', 'Não foi possível enviar sua imagem, por favor, tente mais tarde');
                    } else {
                      Alert.alert('Sucesso', 'Sua imagem foi enviada com sucesso');
                      fetchImages();
                    }
                  } catch (err) {
                    alert('Erro ao enviar a imagem');
                  }*/

              
            }
        }
    };

    return (
        <View>
            <TouchableOpacity
                style={{
                    marginLeft: 35,
                    borderWidth: 0.5,
                    borderColor: '#222',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                    borderRadius: 10,
                }}
                activeOpacity={0.7}
                onPress={handlePickerImage}
            >
                <Text> Upload </Text>
            </TouchableOpacity>

        </View>

    )

};
 /* try {
                    const response = await axios.post(`http://localhost:3000/coletor/upload-image`, formData,
                        {
                            headers: {
                                Accept: 'application.json',
                                'Content-Type': 'multipart/form-data',
                            },
                        });
                    if (response.data.error) {
                        Alert.alert('Erro', 'Não foi possivel enviar sua imagem, por favor, tente mais tarde');

                    } else {
                        Alert.alert('Sucesso',
                            'Sua imagem foi enviada com sucesso');
                        fetchImages();
                    }
                } catch (err) {
                    alert('Erro ao enviar a  imagem')

                }*/