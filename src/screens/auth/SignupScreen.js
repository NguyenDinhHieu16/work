import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Input, Icon, Button } from "@rneui/themed";
import { CheckBox } from '@rneui/themed';

const SignupScreen = () => {

    const navigation = useNavigation();

    const [emai, setEmail] = useState('');
    const [username, setUseName] = useState('');
    const [password, setPassWord] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
      };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/FlashImageResize.png')}
                style={styles.background}    
            >
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.container1}>
                        <Image
                            source={require('../../../assets/Logo.png')}
                            style={styles.image}
                            resizeMode='contain'
                        />
                    </View>

                    <View style={styles.container2}>
                        <TextInput
                            style={styles.input}
                            placeholder='Tên tài Khoản'
                            value={username}
                            onChangeText={setUseName}
                            placeholderTextColor='#696969'
                        />
            
                        <TextInput
                            style={styles.input}
                            placeholder='Email của bạn'
                            value={emai}
                            onChangeText={setEmail}
                            placeholderTextColor='#696969'
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='Mật khẩu'
                            value={password}
                            onChangeText={setPassWord}
                            placeholderTextColor='#696969'
                            secureTextEntry={true}
                        />
            
                        <TextInput
                            style={styles.input}
                            placeholder='Nhập lại mật khẩu'
                            value={rePassword}
                            onChangeText={setRePassword}
                            placeholderTextColor='#696969'
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.component3}>
                        <View style={{width: '100%'}}>
                            <Button
                                buttonStyle = {{borderRadius: 30, backgroundColor: '#44a093', width: '100%',}}
                                title="Đăng ký"
                                titleStyle={{fontSize: 24, fontWeight: 500,}}
                                onPress={()=> {navigation.navigate({name: 'LoginScreen'})}}
                            />
                        </View>

                        <View style={styles.signup}>
                            <View style={{flexDirection: 'row', paddingBottom: 8, alignItems: 'center',}}>
                                <Text style={{fontSize: 14, textAlign: 'center', color: '#fff'}}>Bạn đã có tài khoản?{' '} </Text>
                                <TouchableOpacity onPress={() => {navigation.navigate('LoginScreen')}}><Text style={styles.textLink}>Đăng nhập</Text></TouchableOpacity>
                            </View>
                        </View>

                        <Text style={{alignSelf: 'center', color: '#fff', fontSize: 14,}}>Hoặc đăng nhập với</Text>

                        
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

                    <View style={styles.component4}>
                        <View style={{flexDirection: 'row', fontSize: 15, alignItems: 'center'}}>
                            <CheckBox
                                checked={isChecked}
                                onPress={toggleCheckbox}
                                background='red'
                                containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0)', padding: 0, margin: 0}}
                                checkedColor='#44a093'
                                uncheckedColor='#44a093'
                                // textStyle={styles.textCheckBox}
                            /> 
                            <Text style={styles.des}>Bạn đồng ý với các </Text>
                            <TouchableOpacity><Text style={styles.textLink}>Điều khoản sử dụng </Text></TouchableOpacity>
                            <Text style={styles.des}>và{' '}</Text>
                        </View>
                        <View style={{flexDirection: 'row', fontSize: 15, justifyContent: 'center'}}>
                            <TouchableOpacity><Text style={styles.textLink}>Chính sách quyền riêng tư{' '}</Text></TouchableOpacity>
                            <Text style={styles.des}>của{' '}</Text>
                            <TouchableOpacity><Text style={styles.textLink}>IMAX</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                
            </ImageBackground>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: '15%',
        marginHorizontal: '10%',
    },

    container1: {
        flex: 4,
        marginBottom: '5%',
    },
    image: {
        height: '100%',
        width: '100%',
    },

    container2: {
        width: '100%',
        alignSelf: 'center',
    },
    input: {
        borderWidth: 1.04,
        borderColor: '#44a093',
        backgroundColor: '#F8F8F8',
        marginBottom: '3%',
        padding: '4%',
        fontSize: 14,
        borderRadius: 25,
    },

    component3: {
        marginTop: '5%',
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'space-between',
    },
    optionIconLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
    },
    textLink: {
        color: '#44a093',
        fontSize: 16,
    },

    component4: {
        marginTop: '10%',
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    des: {
        fontSize: 16,
        color: '#fff',
    }
})