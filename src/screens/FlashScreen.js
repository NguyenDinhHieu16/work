import React, {useRef, useEffect} from 'react'
import { ImageBackground, View, StyleSheet, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FlashSCreen = () => {

    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('LoginScreen'); 
        }, 3000); 
      }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/FlashImageResize.png')}
                style={styles.background}
            >
                <View style={{flex: 1}}></View>
                <Animated.Image
                source={require('../../assets/Logo.png')}
                style={[styles.image, { opacity: fadeAnim, flex: 1 }]}
            />
            <View style={{flex: 2}}></View>
            </ImageBackground>
        </View>
    )
}

export default FlashSCreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    background: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },

    image: {
        resizeMode: 'contain',
        marginBottom: 50,
        height: '100%',
        width: '100%',
    }
})
