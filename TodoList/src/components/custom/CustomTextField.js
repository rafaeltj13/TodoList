import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label } from "native-base";

const CustomTextField = ({ rounded, label, field, name, password, ...props }) => {
    const handleChange = newValue => {
        field.setFieldValue(name, newValue);
    }

    return (
        <Item rounded={rounded} floatingLabel stu>
            <Label>{label}</Label>
            <Input onChangeText={handleChange.bind(this)} secureTextEntry={password} />
        </Item>
    );
};

const styles = StyleSheet.create({
    input: {}
});

export default CustomTextField;