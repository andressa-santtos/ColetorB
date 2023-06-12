import { LogBox } from 'react-native';
import { styles } from '../components/css';
import { Text, View, Image, ScrollView} from 'react-native'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'
import MapView ,{ Marker} from 'react-native-maps'
import {useEffect, useState} from 'react'
LogBox.ignoreAllLogs();

export default function Maps(){
  const [Location, setLocation] = useState<LocationObject | null>(null);
  async function requestLocationPermission(){
      const { granted } = await requestForegroundPermissionsAsync();
      
      if(granted){
         const currentPosition = await getCurrentPositionAsync();
        setLocation(currentPosition);
        console.log("LOCAL",Location);
      } 
  } 
  useEffect(() =>{
      requestLocationPermission();
  }, []);
  useEffect(() =>{
      watchPositionAsync({
        accuracy:LocationAccuracy.Highest,
        timeInterval: 10000,
        distanceInterval: 1
      }, (response) => {
        console.log("nova endereço", response);
        console.log("Novo LOCAL",Location);
        setLocation(response);
      });
  }, []);

  return(
   
    <MapView
      style={styles.Maps} 
      showsUserLocation
      initialRegion={{
        latitude: (Location? Location.coords.latitude : -21.4215718),
        longitude: (Location? Location.coords.longitude : -46.8539457),
        latitudeDelta: (Location? 0.003: 0.011),
       longitudeDelta: (Location? 0.003: 0.011),
     }}
    >
       <Marker
       tracksViewChanges={false}
        coordinate={{
           latitude:(Location? Location.coords.latitude : -23.4215718),
           longitude:( Location? Location.coords.longitude : -46.8539457),
         }}
        >
        
         <View style={styles.teste}>
              <Image 
                  source={require('../assets/icons/img/Logo.png')} 
                  style={styles.imageForeground}
                  resizeMode='contain'
              />
          </View>
       </Marker>
    </MapView>   
  );
}

