import { CheckBox } from '@rneui/themed';
import { Button } from '@rneui/themed';
import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView, ImageBackground, KeyboardAvoidingView, Platform, Image, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
      };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ImageBackground
                source={require('../../../assets/FlashImageResize.png')}
                style={styles.background}
            >
                <View style={styles.around}>
                    
                    <View style={styles.container1}>
                        <Text style={styles.wellcome}>Trải nghiệm và khám phá</Text>
                        <Text style={[styles.wellcome,{fontSize: 26}]}>cùng với Yoolife</Text>
                    </View>
                    <View style={styles.container2}>
                        <Image
                            source={require('../../../assets/Logo.png')}
                            resizeMode='contain'
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.container3}>
                        <TextInput
                            style={styles.input}
                            placeholder='Tên tài Khoản Hoặc Email'
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor='#696969'
                        />
            
                        <TextInput
                            style={styles.input}
                            placeholder='Mật khẩu của bạn'
                            value={password}
                            onChangeText={setPassWord}
                            placeholderTextColor='#696969'
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                            <CheckBox
                                checked={isChecked}
                                onPress={toggleCheckbox}
                                title={'Ghi nhớ đăng nhập'}
                                background='red'
                                containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0)', padding: 0, margin: 0}}
                                checkedColor='#44a093'
                                uncheckedColor='#44a093'
                                textStyle={styles.textCheckBox}
                            /> 
                            <TouchableOpacity onPress={()=> {}}>
                                <Text style={styles.forget}>Quên mật khẩu?</Text>
                            </TouchableOpacity>
                        </View>
                                               
                    </View>

                    <View style={styles.component4}>
                        <Button
                            buttonStyle = {{borderRadius: 30, backgroundColor: '#44a093', width: '100%'}}
                            title="Đăng nhập"
                            titleStyle={{fontSize: 24, fontWeight: 500,}}
                            onPress={() => {navigation.navigate({name: 'Home'})}}
                        />
                        <Text style={{alignSelf: 'center', color: '#acc981', fontSize: 16,}}>Hoặc đăng nhập với</Text>
                        <View style={styles.optionIconLogin}>
                            <Image
                                source={require('../../../assets/Icon_Logo/03.png')}
                                style={styles.imageIcon}
                                resizeMode="cover"
                            />
                            <Image
                                source={require('../../../assets/Icon_Logo/02.png')}
                                style={[styles.imageIcon, {backgroundColor: '#fff', borderRadius: 50,}]}
                                resizeMode="cover"
                            />
                            <Image
                                source={require('../../../assets/Icon_Logo/01.png')}
                                style={[styles.imageIcon, {backgroundColor: '#fff', borderRadius: 50,}]}
                                resizeMode="cover"
                            />
                        </View>
                    </View>

                    <View style={styles.component5}>
                        <Text style={{fontSize: 14, color: '#fff',}}>Bạn chưa có tài khoản?</Text>
                        <TouchableOpacity onPress={()=> {navigation.navigate({name:'SignupScreen'})}} ><Text style={styles.signupOption}>Đăng ký ngay</Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },

    background: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },

    around: {
        paddingHorizontal: '10%',
        paddingTop: '15%',
        height: '100%',
        width: '100%',
        position: 'relative',
    },

    container1: {
        marginBottom: '5%',
    },

    wellcome: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },

    container2: {
        height: '22%',
        alignItems: 'center',
    },

    image: {
        height: '100%',
        width: '100%',
    },
    
    container3: {
        marginTop: '10%',
        width: '100%',
    },
    input: {
        borderWidth: 1.04,
        borderColor: '#44a093',
        backgroundColor: '#F8F8F8',
        marginBottom: '5%',
        padding: '4%',
        fontSize: 14,
        borderRadius: 25,
    },

    textCheckBox: {
        fontWeight: 'normal',
        fontSize: 14,
        color: '#fff',
    },

    forget: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#44a093',
    },

    component4: {
        marginTop: '5%',
        alignItems:'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '25%',
    },
    optionLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },

    optionIconLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
    },

    component5: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '78%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: '5%',
        alignItems: 'center',
    },
    signupOption: {
        color: '#44a093',
        fontSize: 16,
    }
})
