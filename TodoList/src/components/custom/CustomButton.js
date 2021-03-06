import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from "native-base";

const CustomTextField = ({ onClick, label, rounded, ...props }) => {
    return (
        <Button {...props} style={styles.button} onPress={() => onClick()} rounded={rounded} primary>
            <Text>{label}</Text>
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginTop: 15,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CustomTextField;