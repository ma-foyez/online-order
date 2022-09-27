import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import Text from '../components/master/Text';

const image = [
    "https://cdn.pixabay.com/photo/2022/08/27/18/12/hop-vines-7415073_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/04/18/21/23/pine-3331657_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/10/20/23/23/spruce-3762001_960_720.jpg"
]

const PlantsSlider = ({ styles }) => {

    const [activeImg, setActiveImg] = useState(0);
    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== activeImg) {
                setActiveImg(slide)
            }
        }
    }


    return (
        <ScrollView>
            <View style={styles.sliderContainer}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled
                    scrollEnabled
                    horizontal
                    automatic
                    style={styles.sliderContainer}
                >
                    {
                        image.map((img, index) => (
                            <Image
                                key={index + 1}
                                source={{ uri: img }}
                                resizeMode="stretch"
                                style={styles.sliderContainer}
                            />
                        ))
                    }
                </ScrollView>
                <View style={styles.scrollDot}>
                    {
                        image.map((img, index) => (
                            <Text
                                key={img}
                                style={activeImg == index ? styles.dotActive : styles.dot}
                            >
                                &#x25cf;
                            </Text>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    );
};

export default PlantsSlider;