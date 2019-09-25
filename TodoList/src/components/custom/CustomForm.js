import React from 'react';
import { StyleSheet } from 'react-native';
import { Form, View } from "native-base";

const CustomFormActions = props => {
    return (
        <View style={styles.root}>
            <Form>
                {props.children}
            </Form>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginTop: 'auto',
        marginBottom: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CustomFormActions;