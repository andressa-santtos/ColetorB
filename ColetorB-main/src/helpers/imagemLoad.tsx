import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import uploadImage from '../pages/CadastrarColetor/coletor';
import api from '../assets/config/configApi';
import { response } from 'express';


export const Header = ({ fetchImages }: { fetchImages: Function }) => {

    const [imge, setImge] = useState('');
    const [data, setData] = useState([]);
    const [url, setUrl] = useState('')

    const getImages = async () => {
        const heaaders = {
            'headers': {
                'Content-Type': 'application/jsom',
            }
        }
        await api.get("/list-image", heaaders)
            .then((response) => {
                console.log(response.data.image);
                setData(response.data.image);
                setUrl(response.data.url);
            }).catch((err) => {
                console.log(err.response)
            });
    }

  

    return (
        <div>
            <h1>foi?</h1>
            <form onSubmit={uploadImage}>
                <label>Imagem: </label>
             
            </form>
        </div>
        
    );

};

/*
{data.map(image => (
                <div key={image.id}>
                    <span>{image.coletor}</span>
                </div>
            ))}

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

                formData.append('image', JSON.parse(JSON.stringify({
                    name: filename,
                    uri: assets[0].uri,
                    type: 'image/' + extend,
                })));



            }
        }
    }

            */