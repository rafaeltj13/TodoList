import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const CustomBottomNavigation = ({ ...props }) => {
    const [active, setActive] = useState('todoList');

    const handlePress = activeBtn => {
        setActive(activeBtn);
    };

    return (
        <Footer style={styles.container}>
            <FooterTab>
                <Button vertical
                    onPress={() => handlePress('todoList')}
                    component={Link} to={`/`}
                    active={active === 'todo'}
                >
                    <Icon name="list" />
                    <Text>Tarefas</Text>
                </Button>
                <Button vertical
                    onPress={() => handlePress('create')}
                    active={active === 'create'}
                >
                    <Icon name="add" />
                    <Text>Adicionar</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};

const styles = StyleSheet.create({
    container: {
        // height: '6vh'
    }
});

export default CustomBottomNavigation;