import { Card, Avatar, IconButton, MD3Colors, List } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, View, VirtualizedList, StyleSheet, Text,StatusBar, SectionList} from 'react-native';
import { styles } from '../components/css';
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
        <View style={styles.containerSelec}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={item => `basicListEntry-${item}`}
        />
      </View>
    );


}