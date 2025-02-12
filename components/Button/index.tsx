import mouraColors from '@/assets/colors';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: mouraColors.darkBlue,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 5,
    },
    buttonText: {
        color: mouraColors.white,
        fontSize: 25,
        fontFamily: 'OpenSans-Regular'
    },
});

export default Button;