import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import mouraColors from '@/assets/colors';


import { Ionicons } from '@expo/vector-icons';
import { ViewStyle, TextStyle } from 'react-native';

interface DataCardProps {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    data: number;
    dataType?: string;
    style?: ViewStyle & TextStyle;
}

const DataCardButton: React.FC<DataCardProps> = ({ title, icon, data, dataType, style }) => {
    return (
        <View style={[styles.card, style]}>
            <View style={styles.header}>
                <Ionicons name={icon} size={25} style={[styles.icon, { color: style?.color || mouraColors.darkGray}]} />
                <Text style={[styles.title, { color: style?.color || mouraColors.darkGray }]}>{title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={[styles.bodyText, { color: style?.color || mouraColors.darkGray}]}>{data}</Text>
                <Text style={[styles.bodyText, { color: style?.color || mouraColors.darkGray}]}>{dataType}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        backgroundColor: mouraColors.transparentBlue,
        borderRadius: 8,
        padding: 5,
        margin: 5,
        minWidth: '35%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    header: {
        flexDirection: 'row',
        margin: 3,
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
    },
    icon: {
        color: mouraColors.darkGray,
        margin: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
        margin: 2,
        color: mouraColors.darkGray,
    },
    body:{
        flexDirection: 'row',
        margin:5,
    },
    bodyText:{
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
        margin: 2,
        color: mouraColors.darkGray,
    },

});

export default DataCardButton;