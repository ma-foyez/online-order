import React from 'react';
import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Text from '../components/master/Text';
import PlantsSlider from '../components/PlantsSlider';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { spacing } from './../theme/spacing';
import { Feather } from '@expo/vector-icons';
import Order from './Order';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <PlantsSlider styles={styles} />
                <View style={styles.itemDetailsArea}>
                    <Text preset='h1' style={{ color: colors.indigoPro }}>Boston Lettuce</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: spacing[5] }}>
                        <Text preset='h1' style={{ color: colors.indigoPro }}>1.10</Text>
                        <Text preset='h4' style={{ color: colors.indigoLight, marginLeft: spacing[2] }}>$ / Piece</Text>
                    </View>
                    <Text style={{ color: colors.green, marginTop: spacing[3] }}>~ 150 gr / piece</Text>
                    <Text preset='h3' style={{ color: colors.indigoPro, marginTop: spacing[3] }}>Spain</Text>

                    <Text preset='small' style={{ color: colors.indigoLight, marginTop: spacing[3] }}>
                        Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
                    </Text>

                    <View style={styles.buttonArea}>
                        <Pressable
                            style={styles.addWishlist}
                        >
                            <AntDesign name="hearto" size={24} color={colors.indigoLight} />
                        </Pressable>
                        <Pressable
                            style={styles.addToCart}
                            onPress={() => {
                                navigation.navigate("Order", Order)
                            }}
                        >
                            <Feather name="shopping-cart" size={24} color={colors.white} />
                            <Text style={{ color: colors.white, marginLeft: spacing[3] }}>ADD TO CART</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
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
        height: HEIGHT * 0.50
    },
    scrollDot: {
        position: 'absolute',
        bottom: spacing[9],
        flexDirection: 'row',
        alignSelf: 'center',
        zIndex: 50
    },
    dotActive: {
        margin: spacing[1],
        color: colors.white
    },
    dot: {
        margin: spacing[1],
        color: colors.indigoLight
    },
    itemDetailsArea: {
        backgroundColor: colors.lightGray,
        padding: spacing[4],
        paddingTop: spacing[9],
        marginTop: -40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40

    },
    buttonArea: {
        marginTop: spacing[7],
        flexDirection: 'row',
    },
    addWishlist: {
        backgroundColor: colors.white,
        padding: spacing[5],
        borderWidth: 0.5,
        borderColor: colors.indigoLight,
        borderRadius: 10,
    },
    addToCart: {
        backgroundColor: colors.green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: spacing[9],
        marginLeft: spacing[4],
        borderWidth: 0.5,
        borderColor: colors.indigoLight,
        borderRadius: 10
    }
})