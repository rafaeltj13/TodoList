import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router";
import { Container } from 'native-base';
import BottomNavigation from '../custom/CustomBottomNavigation';
import HomeRoutes from './HomeRoutes';
import { signinAsyncRequestStarted } from '../../actions/signin-actions';

const Home = ({ token }) => {
    if (!token) return <Redirect to="/signin" />;

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

const mapStateToProps = ({ signin }) => ({
    token: signin.token
});

export default withRouter(connect(mapStateToProps)(Home));