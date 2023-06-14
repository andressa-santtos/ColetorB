import React, {useEffect, useState} from 'react'
import { Text, View, Image, ScrollView} from 'react-native'
import * as animatable from 'react-native-animatable'
import Selection from '../../helpers/selectionLoad';
import { styles } from '../../components/css'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import axios from 'axios';


export default function Coleta({ navigation }:NativeStackScreenProps<any,any>){

    const [data, setData] = useState([]);
    
    const getColetor = async () => {
        await axios.get("http://localhost:3000/coletor")
        .then((response) => {

            setData(response.data.tbl_coletors);

        }).catch((err) =>{

        });


    }


    useEffect(() => {
        getColetor();
    }, []);


    

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
                
                <Text style={styles.boxTextCenter}>Aqui estão os Coletores mais{"\n"} próximos de você</Text>
                <ScrollView style={styles.form}>
                    
                    <Selection/>
                </ScrollView>

            </animatable.View>
        </View>
    );
};
