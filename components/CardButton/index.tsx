import React from 'react';
import { Text, StyleSheet, Image, View, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import mouraColors from '@/assets/colors';

import { LinkProps } from 'expo-router';

interface CardButtonProps {
    title: string;
    route: LinkProps['href'];
    img: ImageSourcePropType;
}

const CardButton: React.FC<CardButtonProps> = ({ title, route, img }) => {
    return (
        <Link href={route} style={{ marginTop: 30 }}>
            <View style={styles.card}>
                <Image source={img} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Ionicons name="arrow-forward" size={25} style={styles.icon} />
            </View>
        </Link>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: mouraColors.transparentBlue,
        borderRadius: 8,
        padding: 5,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center', // Align items in the center
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
        marginBottom: 10,
        marginLeft: 8,
        color: mouraColors.darkGray,
        textAlign: 'center'
    },
    content: {
        fontSize: 14,
        color: mouraColors.darkGray,
    },
    image:{
        width: 70,
        height: 70,
        margin: 2
    },
    icon: {
        alignSelf: 'center',
        color: mouraColors.darkGray,
        marginBottom: 10,
        marginLeft: 8,
        margin: 8,
    }
});

export default CardButton;