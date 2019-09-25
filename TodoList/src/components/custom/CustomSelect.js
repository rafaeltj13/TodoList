import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Picker, Label, Icon } from "native-base";

const CustomSelect = ({ label, field, name, items, ...props }) => {
    
    useEffect(
        () => {
            handleChange('Pendente');
        },
        []
    );

    const [value, setValue] = useState(undefined);
    
    const handleChange = newValue => {
        setValue(newValue)
        field.setFieldValue(name, newValue);
    };

    return (
        <Item picker>
            <Label>{label}</Label>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Status da tarefa"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={value}
                onValueChange={handleChange.bind(this)}
            >
                {items.map((item, index) => (
                    <Picker.Item label={item} value={item} key={index} />
                ))}
            </Picker>
        </Item>
    );
};

const styles = StyleSheet.create({
    input: {}
});

export default CustomSelect;