import { View,StyleSheet } from 'react-native'
import Routes from '../routes'
import React, { useCallback,useEffect,useState} from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto'

export default function FontsLoad() {
    const [appIsReady, setAppIsReady] = useState(false)
    useEffect(() => {
      (async () => {
        try {
            await SplashScreen.preventAutoHideAsync();
            await Font.loadAsync({
            Roboto_100Thin,
            Roboto_100Thin_Italic,
            Roboto_300Light,
            Roboto_300Light_Italic,
            Roboto_400Regular,
            Roboto_400Regular_Italic,
            Roboto_500Medium,
            Roboto_500Medium_Italic,
            Roboto_700Bold,
            Roboto_700Bold_Italic,
            Roboto_900Black,
            Roboto_900Black_Italic
          });
        }
        catch {
          
        }
        finally {
          setAppIsReady(true);
        }
      })();
    }, [])

    const onLayout = useCallback(() => {
        if (appIsReady) {
          SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      if (!appIsReady) {
        return null;
      }
      return (
        <View onLayout={onLayout} style={styles.container}>
          <Routes/>
        </View>
      );
    }
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});