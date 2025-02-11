import React from 'react';
import { View, StyleSheet } from 'react-native';
import mouraColors from '@/assets/colors';
import CardButton from '@/components/CardButton';


export default function ConnectedToMouraTracao(){ 
  return (
    <View>
      {/* <Text>Tela para quando o dispositivo estiver conectado</Text> */}
      <CardButton title=' Find Moura Connect Tracao' route='/Moura_Tracao/FindMouraTracao' img={require('@/assets/images/icon.png')}/>
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