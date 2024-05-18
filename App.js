import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigator"
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600semiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600semiBold,
    Montserrat_700Bold,
  });

  return (<NavigationContainer>
    <HomeStackNavigator />
  </NavigationContainer>)
    
  
}