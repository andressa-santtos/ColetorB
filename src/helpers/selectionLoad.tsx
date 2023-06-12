import { Card, Avatar, IconButton, MD3Colors, List } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from '../components/css'
import axios from 'axios';

export default function Selection() {

    const [data, setData] = useState([]);

    const getColetor = async () => {
        await axios.get("http://localhost:3000/coletor")
            .then((response) => {

                setData(response.data.tbl_coletors);

            }).catch((err) => {

            });
    }

    useEffect(() => {
        getColetor();
    }, []);


    return (
        <View>



            <Card style={styles.containerSelection}>
                <Card.Title
                    titleStyle={styles.styleTitle}
                    leftStyle={styles.styleLeft}
                    title="Matue MT ksfkadihdihiodhsoifdi"
                    left={() => <Avatar.Image size={90} source={require('../assets/icons/img/user0.png')} />}
                />
                <Card.Content>
                    <View style={styles.containerIcon}>
                        <IconButton
                            icon="comment-processing"
                            iconColor={MD3Colors.neutral0}
                            size={35}
                            onPress={() => console.log('comentario')}
                        />
                        <IconButton
                            icon="star"
                            iconColor={MD3Colors.neutral0}
                            size={36}
                            onPress={() => console.log('avaliado')}
                        />
                    </View>
                </Card.Content>
            </Card>
            <Card style={styles.containerSelection}>
                <Card.Title
                    titleStyle={styles.styleTitle}
                    leftStyle={styles.styleLeft}
                    title="Spinardi & Sid"
                    left={() => <Avatar.Image size={90} source={require('../assets/icons/img/user1.png')} />}
                />
                <Card.Content>
                    <View style={styles.containerIcon}>
                        <IconButton
                            icon="comment-processing"
                            iconColor={MD3Colors.neutral0}
                            size={35}
                            onPress={() => console.log('comentario')}
                        />
                        <IconButton
                            icon="star"
                            iconColor={MD3Colors.neutral0}
                            size={36}
                            onPress={() => console.log('avaliado')}
                        />
                    </View>
                </Card.Content>
            </Card>
            <Card style={styles.containerSelection}>
                <Card.Title
                    titleStyle={styles.styleTitle}
                    leftStyle={styles.styleLeft}
                    title="Trasvi Chicote"
                    left={() => <Avatar.Image size={90} source={require('../assets/icons/img/user2.png')} />}
                />
                <Card.Content>

                </Card.Content>
            </Card>
            <Card style={styles.containerSelection}>
                <Card.Title
                    titleStyle={styles.styleTitle}
                    leftStyle={styles.styleLeft}
                    title="Trasvi Chicote"
                    left={() => <Avatar.Image size={90} source={require('../assets/icons/img/user2.png')} />}
                />
                <Card.Content>
                    <View style={styles.containerIcon}>
                        <IconButton
                            icon="comment-processing"
                            iconColor={MD3Colors.neutral0}
                            size={35}
                            onPress={() => console.log('comentario')}
                        />
                        <IconButton
                            icon="star"
                            iconColor={MD3Colors.neutral0}
                            size={36}
                            onPress={() => console.log('avaliado')}
                        />
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
};
/* {data.map(tbl_coletor =>(
            <div key={tbl_coletor.id}>
                <span>{tbl_coletor.id}</span><br/>
                <span>{tbl_coletor.rua_coletor}</span><br/>
                <span>{tbl_coletor.coletor}</span><br/>
                <span>{tbl_coletor. telefone_coletor}</span><br/>
            </div>
        ))}*/