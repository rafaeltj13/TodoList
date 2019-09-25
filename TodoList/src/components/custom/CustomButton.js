import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from "native-base";

const CustomTextField = ({ onClick, label, rounded, ...props }) => {
    return (
        <Button style={styles.button} onPress={onClick()} rounded={rounded} primary>
            <Text>{label}</Text>
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        textAlign: 'center'
    }
});

export default CustomTextField;