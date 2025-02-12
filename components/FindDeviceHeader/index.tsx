import React from 'react';
import { View, ActivityIndicator, ViewProps, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import mouraColors from '@/assets/colors';

interface HeaderProps extends ViewProps {
  loading: boolean;
  Icon: ImageSourcePropType;
  type: string;
}

const FindDeviceHeader: React.FC<HeaderProps> = ({ loading, Icon, type }) => {
  return (
    <View style={styles.loadingContainer}>
      <View style={styles.listHeader}>
        <Image style={styles.img} source={Icon} />
        <View style={styles.textArea}>
          <Text style={styles.title}>Busque por Dispositivos {type} Próximos</Text>
          <Text style={styles.subtitle}>Dispositivos encontrados</Text>
        </View>
      </View>

      {/* {loading && (
        <View style={{ marginBottom: 15 }}>
          <ActivityIndicator size={25} color={mouraColors.superlightGray} />
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: mouraColors.lightGray,
    flexShrink: 1, // Garante que o texto não suma em telas menores
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-SemiBold',
    color: mouraColors.darkBlue,
    flexWrap: 'wrap',
    flexShrink: 1, // Permite que o texto ajuste de acordo com o espaço disponível
  },
  textArea: {
    margin: 10,
    flex: 1, // Ocupa o espaço restante sem quebrar o layout
    alignItems: 'flex-start',
  },
  listHeader: {
    width: '100%', // Faz com que o container ocupe toda a largura disponível
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: mouraColors.white,
  },
  img: {
    width: '30%',
    height: '70%',
    margin: 5,
    borderRadius: 10,
  },
});

export default FindDeviceHeader;
