import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from "native-base";

const CustomFormActions = props => {
    return (
        <View style={styles.root}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
    }
});

export default CustomFormActions;