
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

import mouraColors from '@/assets/colors';
const logo = '../assets/images/logo_moura_connect_login_removebg.png';
import CardButton from '@/components/CardButton';
import React from 'react';
const imgBg = '../assets/images/background_white_blueshape3.png';

export default function Index() {
    return (
      <ImageBackground source={require(imgBg)} style={styles.container}>
        <View>
          <Image style={styles.image} source={require(logo)} />
        </View>
        <Text style={styles.title}>Selecione o dispositivo para conexão</Text>
        <CardButton title='Moura Connect Tracao' route='/ConnectedToMouraConnect' img={require('@/assets/images/logo_connect.png')} />
        <CardButton title='Moura Auto' route='/ConnectedToMouraConnect' img={require('@/assets/images/icon.png')} />
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'center',
    backgroundColor: mouraColors.white,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: mouraColors.black,
    fontFamily: 'OpenSans-SemiBold',
    alignSelf: 'center',
    margin: 15,
  },
});

