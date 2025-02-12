import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import mouraColors from '@/assets/colors'; // Adjust the import path as necessary

const EmptyScanList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.listText}>
        Nenhum dispositivo encontrado,
        tente novamente
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        minHeight: 430,
        borderRadius: 5,
        borderColor: mouraColors.lightGray,
        borderWidth: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listText: {
        color: mouraColors.darkBlue,
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 10
    },
});
export default EmptyScanList