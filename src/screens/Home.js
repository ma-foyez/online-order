import React, { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Text from '../components/master/Text';
import PlantsSlider from '../components/PlantsSlider';
import { colors } from '../theme/colors';
// import Text from '../components/master/Text';
// import { colors } from '../theme/colors';
// import { spacing } from '../theme/spacing';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { spacing } from './../theme/spacing';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <PlantsSlider styles={styles} />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    sliderContainer: {
        width: WIDTH,
        height: HEIGHT * 0.45
    },
    scrollDot: {
        position: 'absolute',
        bottom: spacing[6],
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: spacing[1],
        color: colors.white
    },
    dot: {
        margin: spacing[1],
        color: colors.IndigoLight
    }
})