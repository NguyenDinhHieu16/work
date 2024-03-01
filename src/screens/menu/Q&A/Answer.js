import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import QuestionCard from '../../../component/QuestionCard';
import { Button, Input } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Answer = ({route}) => {

    const navigation = useNavigation();
    const { ques, nameNavigate, titleHeader } = route.params;
    const [ans, setAns] = useState('');

    const data = [
        {
            avatar:'',
            userName: '',
            time: '15:20 27/02/2024',
            content: 'Thủ tục hành chính Xác nhận cam kết hoặc chứng nhận sản phẩm thủy sản xuất khẩu có nguồn gốc từ thủy sản khai thác nhập khẩu được thực hiện theo yêu cầu của tổ chức, cá nhân (xuất khẩu vào thị trường có yêu cầu)',
            reply: 1,
        },
        {
            //https://picsum.photos/id/1/200/300
          avatar: '../../assets/avt.png',
          userName: 'Nguyễn Hoàng Long',
          time: '15:20 20/02/2023',
          content: 'Thủ tục hành chính Xác nhận cam kết hoặc chứng nhận sản phẩm thủy sản xuất khẩu có nguồn gốc từ thủy sản khai thác nhập khẩu có phải bắt buộc hay không?',
          reply: 1,
        },
        {
          avatar: '../../assets/avt.png',
          userName: 'Nguyễn Hoàng Long',
          time: '15:20 27/02/2024',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac magna...',
          reply: 2,
        },
      ];

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <View style={{flexDirection: 'row',}}>
                    <View style={{flex: 1,}}>
                        <TouchableOpacity onPress={() => {navigation.navigate({name: nameNavigate})}}>
                            <Image
                                source={require('../../../../assets/Icon/Back.png')}
                                style={styles.backStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 3,justifyContent: 'center', paddingBottom: 15}}>
                        <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '600',}}>{titleHeader}</Text>
                    </View>
                    <View style={{flex: 1,}}></View>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.ScrollViewStyle}>
            <View style={styles.component3}>
                    <Text style={{color: '#acc981', fontSize: 18, fontWeight: 600, paddingVertical: 10,}}>Câu hỏi liên thường gặp</Text>
                    <QuestionCard
                            id={ques.id}
                            avatar={ques.avatar}
                            userName={ques.userName}
                            time={ques.time}
                            content={ques.content}
                            reply={ques.reply}
                        />
                    {data.filter(item => item.reply === ques.id).map((item, key) => (
                        <QuestionCard
                            id={item.id}
                            avatar={item.avatar}
                            userName={item.userName}
                            time={item.time}
                            content={item.content}
                            reply={item.reply}
                            key={key}
                        />
                    ))}

                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/camera.png')}
                        style={styles.imageIcon}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/imageTemp.png')}
                        style={styles.imageIcon}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder="Câu trả lời"
                    value={ans}
                    onChangeText={setAns}
                    style={styles.searchInput}
                    
                />
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/send.png')}
                        style={styles.imageIcon}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

export default Answer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '8%',
    },
    headerStyle: {
        paddingHorizontal: '3%',
        borderBottomWidth: 4,
        borderBottomColor: '#EEEEEE',
    },

    ScrollViewStyle: {
        flexGrow: 1,
        paddingHorizontal: '3%',
        paddingBottom: 90,
    },

    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#fff',
        alignItems :'center',
        width: '100%',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        justifyContent: 'space-around',
    },
    createQues: {
        backgroundColor: '#acc981',
        width: '100%',
        borderRadius: 20,
    },

    searchInput: {
        borderBottomWidth: 0,
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 15,
        borderRadius: 30,
        height: 40,
        width: '60%',
        fontSize: 16,
    },
    backStyle: {
        height: 30,
        aspectRatio: 1,
    }
})