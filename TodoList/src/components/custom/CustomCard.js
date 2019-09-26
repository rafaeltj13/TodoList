import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Card, CardItem, Text, Body } from "native-base";

const CustomCard = ({ todo, ...props }) => {
    return (
        <Card style={styles.card}>
            <CardItem header bordered button {...props}>
                <Text>{todo.title}</Text>
            </CardItem>
            <CardItem button {...props}>
                <Body>
                    <Text>{todo.description}</Text>
                </Body>
            </CardItem>
            <CardItem footer bordered button {...props}>
                <Text style={styles[`${todo.status}`]}>{todo.status}</Text>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 10
    },
    Pendente: {
        color: '#2F5D94'
    },
    Fazendo: {
        color: '#DA7D05'
    },
    Concluida: {
        color: '#54BD07'
    }
});

export default CustomCard;