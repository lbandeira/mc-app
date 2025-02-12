import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import mouraColors from '@/assets/colors';

import { LinkProps } from 'expo-router';

interface DeviceCardButtonProps {
    name: string;
    rssi: number;
    id: string;
    route: LinkProps['href'];
}

const DeviceCardButton: React.FC<DeviceCardButtonProps> = ({ name, id, rssi, route }) => {
    return (
        <Link href={route} style={{ marginTop: 30 }}>
            <View style={styles.card}>
                <View style={styles.box}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{id}</Text>
                </View>
                <Text style={styles.title}>RSSI: {rssi}</Text>
            </View>
        </Link>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: mouraColors.darkBlue,
        borderRadius: 8,
        padding: 8,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center', 
        justifyContent: 'space-between', 
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
        margin: 2,
        color: mouraColors.white,
        textAlign: 'left',
    },
    subtitle:{
        fontSize: 14,
        marginLeft: 4,
        fontFamily: 'OpenSans-Regular',
        margin: 2,
        color: mouraColors.white,
        textAlign: 'left',
    },
    box:{
        margin: 5,
        flexDirection: 'column',
        alignItems: 'flex-start', 
    },
});

export default DeviceCardButton;