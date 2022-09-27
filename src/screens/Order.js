import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Dimensions, Pressable } from 'react-native';
import Text from '../components/master/Text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Splash from './../../assets/svg/Splash';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Order = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.orderBanner}></View>

                <View style={styles.itemDetailsArea}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: spacing[4] }}>
                        <View style={styles.splashArea}>
                            <Splash />
                        </View>
                    </View>
                    <Text preset='h1' style={{ color: colors.indigoPro, textAlign: 'center' }}>Non-Contact Deliveries</Text>

                    <Text preset='small' style={{ color: colors.indigoLight, marginTop: spacing[5], textAlign: 'center' }}>
                        When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                    </Text>

                    <Pressable style={styles.orderBtn}>
                        <Text style={{ color: colors.white, textAlign: 'center', }}>ORDER NOW</Text>
                    </Pressable>
                    <Pressable style={styles.dismissBtn} >
                        <Text style={{ color: colors.indigoLight, textAlign: 'center', }}>DISMISS</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Order;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    orderBanner: {
        width: WIDTH,
        height: HEIGHT * 0.50,
        backgroundColor: colors.indigo
    },
    splashArea: {
        backgroundColor: colors.white,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemDetailsArea: {
        backgroundColor: colors.lightGray,
        padding: spacing[4],
        paddingTop: spacing[9],
        marginTop: -40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40

    },

    orderBtn: {
        backgroundColor: colors.green,
        padding: spacing[4],
        marginLeft: spacing[4],
        borderWidth: 0.5,
        borderColor: colors.indigoLight,
        borderRadius: 10,
        marginTop: spacing[9]
    },
    dismissBtn: {
        backgroundColor: colors.white,
        padding: spacing[4],
        marginLeft: spacing[4],
        borderWidth: 0.5,
        borderColor: colors.indigoLight,
        borderRadius: 10,
        marginTop: spacing[4]
    }
})