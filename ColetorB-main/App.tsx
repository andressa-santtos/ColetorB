import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {StatusBar} from 'react-native'
import FontLoad from './src/helpers/fontsLoad'

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar backgroundColor="#000" barStyle="light-content"/>
          <FontLoad/>
      </NavigationContainer>
  );
}