
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

import mouraColors from '@/assets/colors';
const logo = '../assets/images/logo_moura_connect_login_removebg.png';
import CardButton from '@/components/CardButton';
import React from 'react';

const imgBg = '@/assets/images/background_white_blueshape3.png';
const logo_auto = '@/assets/images/logo_auto.png';
const logo_connect = '@/assets/images/logo_connect.png';
const moura_tracao_path = '/Moura_Tracao/FindMouraTracao';
const moura_auto_path = '/Moura_Auto/FindMouraAuto';

export default function Index() {
    return (
      <ImageBackground source={require(imgBg)} style={styles.container}>
        <View>
          <Image style={styles.image} source={require(logo)} />
        </View>
        <Text style={styles.title}>Seleção de dispositivos</Text>
        <View style={styles.buttonContainer}>
          <CardButton title='Moura Tração' route={moura_tracao_path} img={require(logo_connect)} />
          <CardButton title='Moura Auto' route={moura_auto_path} img={require(logo_auto)} />
        </View>
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
    color: mouraColors.lightGray,
    fontFamily: 'OpenSans-SemiBold',
    alignSelf: 'center',
    margin: 15,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },

});

