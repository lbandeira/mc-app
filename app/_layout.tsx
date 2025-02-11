import React from 'react';
import { Stack } from "expo-router";
import mouraColors from '@/assets/colors';

export default function RootLayout() {
  return (
    <Stack> 

      <Stack.Screen name="index"
      options={{
      headerShown: false,
      }}/>

      <Stack.Screen name="Moura_Tracao/ConnectedToMouraTracao"
      options={{
      headerTitle: "Moura Connect Tração",
      headerStyle: { backgroundColor: mouraColors.darkBlue },
      headerTintColor: mouraColors.white, 
      headerTitleStyle: { fontFamily: 'OpenSans-Regular', fontSize: 20 }, 
      }}/>
      
      <Stack.Screen name="Moura_Tracao/FindMouraTracao"
      options={{
      headerTitle: "Selecione o dispositivo",
      headerStyle: { backgroundColor: mouraColors.darkBlue },
      headerTintColor: mouraColors.white, 
      headerTitleStyle: { fontFamily: 'OpenSans-Regular', fontSize: 20 }, 
      }}/>

      <Stack.Screen name="Moura_Auto/ConnectedToMouraAuto"
      options={{
      headerTitle: "Moura Auto",
      headerStyle: { backgroundColor: mouraColors.darkBlue },
      headerTintColor: mouraColors.white, 
      headerTitleStyle: { fontFamily: 'OpenSans-Regular', fontSize: 20 }, 
      }}/>
      
      <Stack.Screen name="Moura_Auto/FindMouraAuto"
      options={{
      headerTitle: "Selecione o dispositivo",
      headerStyle: { backgroundColor: mouraColors.darkBlue },
      headerTintColor: mouraColors.white, 
      headerTitleStyle: { fontFamily: 'OpenSans-Regular', fontSize: 20 }, 
      }}/>

    </Stack>
  );
}
