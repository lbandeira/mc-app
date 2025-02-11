import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import mouraColors from '@/assets/colors';
import FindDeviceHeader from '@/components/FindDeviceHeader';
import Button from '@/components/Button';
import EmptyScanList from '@/components/EmptyScanList';
const auto = '@/assets/images/logo_auto.png'

export default function FindMouraAuto(){ 
  return (
    <View style={styles.container}>
      <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={<FindDeviceHeader loading={false} Icon={require(auto)} type={'Moura Auto'} />}
      />
      <EmptyScanList></EmptyScanList>
      <View style={styles.buttonArea}>
        <Button
        title="Buscar Dispositivos"
        style={styles.button}
        onPress={() => {
          /**
           * Só disparar scan caso não esteja carregando
           */
        }}
        />
      </View>
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
  buttonArea: {
    margin: 5,
  },
  button:{
    width: '100%',
    backgroundColor: mouraColors.darkYellow,
    color: mouraColors.white,
    marginBottom: 30,
    margin: 5,
  },
});