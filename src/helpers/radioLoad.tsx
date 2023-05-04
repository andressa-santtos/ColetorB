import { RadioButton, Avatar  } from 'react-native-paper'
import React,{useState} from 'react'
import { View, Text }from 'react-native'
import colors from '../services/colors'
import {styles} from '../components/css'

export default function Radio(){
    
    return(
       
        <View style={styles.selectedRadio}>
            <Avatar.Image size={70} source={require('../assets/icons/img/Logo.png')} />
            <Text style={styles.subTitulo}>primeiro</Text>
            <RadioButton color='#000' value="teste" />
        </View>          
                
    );
};