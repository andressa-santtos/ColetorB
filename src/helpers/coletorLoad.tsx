import { Card, Avatar, IconButton, MD3Colors } from 'react-native-paper'
import React from 'react'
import { View }from 'react-native'
import {styles} from '../components/css'
import Selection from './selectionLoad'

export default function Coletor(){
   
    return(
        <><View>
            <Selection />
        </View><Card style={styles.containerSelection}>
                <Card.Title
                    title="Matue MT"
                    left={() => <Avatar.Image size={90} source={require('../assets/icons/img/user0.png')} />} />
                <Card.Actions>
                    <View style={styles.Area}>
                        <IconButton
                            icon="comment-processing"
                            iconColor={MD3Colors.neutral0}
                            size={40}
                            onPress={() => console.log('comentario')} />
                        <IconButton
                            icon="star"
                            iconColor={MD3Colors.neutral0}
                            size={40}
                            onPress={() => console.log('avaliado')} />
                    </View>
                </Card.Actions>
                <Card.Title
                    title="Spinardi & Sid"
                    left={() => <Avatar.Image size={90} source={require('../assets/icons/img/user1.png')} />} />
                <Card.Actions>
                    <View style={styles.Area}>
                        <IconButton
                            icon="comment-processing"
                            iconColor={MD3Colors.neutral0}
                            size={40}
                            onPress={() => console.log('comentario')} />
                        <IconButton
                            icon="star"
                            iconColor={MD3Colors.neutral0}
                            size={40}
                            onPress={() => console.log('avaliado')} />
                    </View>
                </Card.Actions>
                <Card.Title
                    title="Trasvi Chicote"
                    left={() => <Avatar.Image size={90} source={require('../assets/icons/img/user2.png')} />} />
                <Card.Actions>
                    <View style={styles.Area}>
                        <IconButton
                            icon="comment-processing"
                            iconColor={MD3Colors.neutral0}
                            size={40}
                            onPress={() => console.log('comentario')} />
                        <IconButton
                            icon="star"
                            iconColor={MD3Colors.neutral0}
                            size={40}
                            onPress={() => console.log('avaliado')} />
                    </View>
                </Card.Actions>
            </Card></>
        
    );
};