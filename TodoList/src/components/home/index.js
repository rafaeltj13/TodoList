import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

const Home = ({ sessionToken }) => {
    return (
        <View>
            <View style={styles.container}>
                <Text>See Your Changes</Text>
            </View>
            {/* <BottomNavigation /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: '1rem',
    },
});

const mapStateToProps = (store) => ({
    // sessionToken
});

export default withRouter(connect(mapStateToProps)(Home));