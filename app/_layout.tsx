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

      <Stack.Screen name="ConnectedToMouraConnect"
      options={{
      headerTitle: "Moura Connect Tração",
      headerStyle: { backgroundColor: mouraColors.darkBlue },
      headerTintColor: mouraColors.white, 
      headerTitleStyle: { fontFamily: 'OpenSans-Regular', fontSize: 20 }, 
      }}/>
      
      <Stack.Screen name="FindMouraConnectTracao"
      options={{
      headerTitle: "Selecione o dispositivo",
      headerStyle: { backgroundColor: mouraColors.darkBlue },
      headerTintColor: mouraColors.white, 
      headerTitleStyle: { fontFamily: 'OpenSans-Regular', fontSize: 20 }, 
      }}/>

    </Stack>
  );
}
