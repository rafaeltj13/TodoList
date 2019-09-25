import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const CustomBottomNavigation = ({ ...props }) => {
    const [active, setActive] = useState('todoList');

    const handlePress = activeBtn => {
        setActive(activeBtn);
        props.history.push(`/${activeBtn}`);
    };

    return (
        <Footer>
            <FooterTab>
                <Button vertical
                    onPress={() => handlePress('todoList')}
                    active={active === 'todoList'}
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

export default withRouter(CustomBottomNavigation);