import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Container } from 'native-base';
import BottomNavigation from '../custom/CustomBottomNavigation';
import HomeRoutes from './HomeRoutes';

const Home = ({ sessionToken }) => {
    return (
        <Container>
            <ScrollView style={styles.container}>
                <HomeRoutes />
            </ScrollView>
            <BottomNavigation />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
});

const mapStateToProps = (store) => ({
    // sessionToken
});

export default withRouter(connect(mapStateToProps)(Home));