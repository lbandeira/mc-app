import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import mouraColors from '@/assets/colors';
import FindDeviceHeader from '@/components/FindDeviceHeader';
import Button from '@/components/Button';
import EmptyScanList from '@/components/EmptyScanList';
import DeviceCardButton from '@/components/DeviceCardButton';

const auto = require('@/assets/images/logo_auto.png');
const moura_auto_conn_path = '/Moura_Auto/ConnectedToMouraAuto';

export default function FindMouraAuto() {
  const [loading, setLoading] = React.useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FindDeviceHeader loading={loading} Icon={auto} type={'Moura Auto'} />
      </View>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={mouraColors.darkYellow} />
          <View style={styles.listDevices}>
            <DeviceCardButton name='MLOGG-895295729' id='CA:FE:09:30' rssi={50} route={moura_auto_conn_path}></DeviceCardButton>
            <DeviceCardButton name='MLOGG-895295729' id='CA:FE:09:30' rssi={-50} route={moura_auto_conn_path}></DeviceCardButton>
            <DeviceCardButton name='MLOGG-895295729' id='CA:FE:09:30' rssi={50} route={moura_auto_conn_path}></DeviceCardButton>
          </View>
        </View>
      ) : (
        <EmptyScanList />
      )}
      <Button
        title="Buscar Dispositivos"
        style={styles.button}
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: mouraColors.white,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: '100%',
  },
  button: {
    width: '90%',
    height: '8%',
    marginBottom: 15,
    backgroundColor: mouraColors.darkYellow,
    color: mouraColors.white,
  },
  listDevices: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
});

