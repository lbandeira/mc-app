import React from 'react';

import { View, ActivityIndicator, ViewProps, Text, Image, ImageSourcePropType } from 'react-native';

import mouraColors from '../../assets/colors';
import { StyleSheet } from 'react-native';

interface HeaderProps extends ViewProps {
  loading: boolean;
  Icon: ImageSourcePropType;
  type: string;
}

const FindDeviceHeader: React.FC<HeaderProps> = ({loading, Icon, type}) => {
  
  return(
    <View>
        <View style={styles.listHeader}>
            <Image style={styles.img} source={Icon} />
            <View style={styles.textArea}> 
                <Text style={styles.title}>
                Busque por Dispositivos {type} Próximos
                </Text>
                <Text style={styles.subtitle}>
                Dispositivos encontrados
                </Text>
            </View>
        </View> 
          {/* {loading &&
            <View style={{marginBottom: 15}}>
              <ActivityIndicator size={25} color={mouraColors.superlightGray} />
            </View>
          } */}
    </View>
  );
}

const styles = StyleSheet.create({
    loadingContainer: {
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: mouraColors.lightGray,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'OpenSans-SemiBold',
        color: mouraColors.darkBlue,
        flexWrap: 'wrap',
    },
    textArea: {
        margin: 10,
        flex: 1,
        alignItems: 'flex-start',
    },
    listHeader: {
        maxWidth: '100%',
        padding: 10,
        // flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: mouraColors.white,
    },
    img:{
        flex: 1,
        maxWidth: 60,
        maxHeight: 60,
        margin: 10,
        borderRadius: 10,
    },
});

export default FindDeviceHeader;