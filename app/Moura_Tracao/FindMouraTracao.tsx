import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import mouraColors from '@/assets/colors';


export default function FindMouraTracao(){ 
  return (
    <View>
      <Text>Tela com a lista de dispositivos disponiveis</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'center',
    backgroundColor: mouraColors.white,
  },
  title: {
    fontSize: 20,
    color: mouraColors.black,
    fontFamily: 'OpenSans-SemiBold',
    alignSelf: 'center',
    margin: 15,
  },
});