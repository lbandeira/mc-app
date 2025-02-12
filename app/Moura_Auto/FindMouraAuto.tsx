import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import mouraColors from '@/assets/colors';
import FindDeviceHeader from '@/components/FindDeviceHeader';
import Button from '@/components/Button';
import EmptyScanList from '@/components/EmptyScanList';

const auto = require('@/assets/images/logo_auto.png');

export default function FindMouraAuto() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
            <FindDeviceHeader loading={false} Icon={auto} type={'Moura Auto'} />
          </View>
      {/* <FlatList
        data={[{ key: 'header' }]} // Adiciona um item fictício para evitar lista vazia
        renderItem={() => null} // Mantém sem itens visíveis
        ListHeaderComponent={
          
        }
      /> */}
      <EmptyScanList />
      {/* <View style={styles.buttonArea}> */}
        <Button
          title="Buscar Dispositivos"
          style={styles.button}
          onPress={() => {
            /**
             * Só disparar scan caso não esteja carregando
             */
          }}
        />
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: mouraColors.white,
  },
  headerContainer: {
    width: '100%',
  },
  buttonArea: {
    margin: 5,
  },
  button: {
    width: '90%',
    height: '8%',
    backgroundColor: mouraColors.darkYellow,
    color: mouraColors.white,
    marginBottom: 20,
    margin: 5,
  },
});

