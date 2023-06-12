import { RadioButton, Avatar } from 'react-native-paper'
import React,{useState} from 'react'
import { View, Text }from 'react-native'
import {styles} from '../components/css'

export default function Radio(){
    const [value, setValue] = useState('');
   
    return(
       
        <RadioButton.Group onValueChange={novoValor => setValue(novoValor)} value={value}>
            <View style={styles.selectedRadio}>
                <View style={styles.border}>
                    <Avatar.Image  size={70} source={require('../assets/icons/img/papelao.png')} />
                </View>
                <Text style={styles.categoryText}>Papelão</Text>
                <RadioButton color='#000' value="0 - papelao" />
            </View>   
            <View style={styles.selectedRadio}>
                <View style={styles.border}>
                    <Avatar.Image  size={70} source={require('../assets/icons/img/garrafa.png')} />
                </View>
                <Text style={styles.categoryText}>Plástico</Text>
                <RadioButton color='#000' value="1 - plastico" />
            </View>   
            <View style={styles.selectedRadio}>
                <View style={styles.border}>
                    <Avatar.Image  size={70} source={require('../assets/icons/img/metal.png')} />
                </View>
                <Text style={styles.categoryText}>Metal</Text>
                <RadioButton color='#000' value="2 - metal" />
            </View>   
            <View style={styles.selectedRadio}>
                <View style={styles.border}>
                    <Avatar.Image  size={70} source={require('../assets/icons/img/vidro.png')} />
                </View>
                <Text style={styles.categoryText}>Vidro</Text>
                <RadioButton color='#000' value="3 - vidro" />
            </View>   
        </RadioButton.Group>

    );
};