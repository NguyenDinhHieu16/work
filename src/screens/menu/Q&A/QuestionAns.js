import { Button, Input } from '@rneui/themed';
import React, { useState, useCallback } from 'react'
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import QuestionCard from '../../../component/QuestionCard';
import { useNavigation } from '@react-navigation/native';

const QuestionAns = () => {

    const navigation = useNavigation();

    const [search, setSearch] = useState('')
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')

    const trans = (item) => {
        navigation.navigate('Answer', {ques: item, nameNavigate: 'QuestionAns', titleHeader: 'Chuyên mục hỏi đáp'});
    }

    const data = [
        {
            //https://picsum.photos/id/1/200/300
          id: 1,
          avatar: '../../assets/avt.png',
          userName: 'Nguyễn Đình Hiếu',
          time: '15:20 20/02/2023',
          content: 'Thủ tục hành chính Xác nhận cam kết hoặc chứng nhận sản phẩm thủy sản xuất khẩu có nguồn gốc từ thủy sản khai thác nhập khẩu có phải bắt buộc hay không?',
          reply: 0,
          ques: true,
          notReplyed: false,
        },
        {
          id: 2,
          avatar: '../../assets/avt.png',
          userName: 'Nguyễn Đình Hiếu',
          time: '15:20 27/022024',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac magna...',
          reply: 0,
          ques: true,
          notReplyed: false,
        },
        {
            //https://picsum.photos/id/1/200/300
          id: 3,
          avatar: '../../assets/avt.png',
          userName: 'Nguyễn Đình Hiếu',
          time: '15:20 20/02/2023',
          content: 'Thủ tục hành chính Xác nhận cam kết hoặc chứng nhận sản phẩm thủy sản xuất khẩu có nguồn gốc từ thủy sản khai thác nhập khẩu có phải bắt buộc hay không?',
          reply: 0,
          ques: true,
          notReplyed: false,
        },
      ];

    return (
         <View style={styles.container}>
            <View style={styles.headerStyle}>
                <View style={{flexDirection: 'row', height: 30}}>
                    <View style={{flex: 1,}}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                            <Image
                                source={require('../../../../assets/Icon/Back.png')}
                                style={styles.backStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 3,justifyContent: 'center'}}>
                        <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '600',}}>Chuyên mục hỏi đáp</Text>
                    </View>
                    <View style={{flex: 1,}}></View>
                </View>
                <View style={{backgroundColor: '#EEEEEE', height: 40, borderRadius: 200, flexDirection: 'row', marginVertical: 15,}}>
                    <TouchableOpacity style={[styles.buttonHeaderActive, styles.buttonHeader]} onPress={()=>{}}>
                        <Text style={{fontSize: 16, fontWeight: 500, color: '#fff',}}>Danh mục câu hỏi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonHeader} onPress={()=>{navigation.navigate('ManageQues')}}>
                        <Text style={{fontSize: 16, fontWeight: 500,}}>Quản lý</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.containerScrollView}>
                <View style={styles.component2}>
                    <Text style={{fontSize: 16, fontWeight: 500,}}>Tìm kiếm câu hỏi thường gặp</Text>
                    <View style={{marginVertical: 15, flexDirection: 'row', width: '100%', paddingRight: 10, height: 40,}}>
                        <View style={{width: '70%',}}>
                        <Input
                            leftIcon={
                                <Image
                                    source={require('../../../../assets/search.png')}
                                    style={{height: '60%', aspectRatio: 1,}}
                                />
                            }
                            placeholder="Nhập tiêu đề"
                            placeholderTextColor='#000'
                            value={search}
                            onChangeText={(text) => setSearch(text)}
                            inputContainerStyle={styles.searchInput}
                            inputStyle={{paddingLeft: 5}}
                        />
                        </View>
                        <View style={{width: '29%'}}>
                        <Button
                            title={'Tìm kiếm'}
                            titleStyle={{fontWeight: 500}}
                            buttonStyle={styles.buttonSearchStyle}
                        />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Input
                            leftIcon={
                                <Image
                                    source={require('../../../../assets/tieuDe.png')}
                                    style={{height: '60%', aspectRatio: 1,}}
                                />
                            }
                            placeholder="Chọn tiêu đề"
                            placeholderTextColor='#000'
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                            inputContainerStyle={[styles.searchInput, {height: 35}]}
                            inputStyle={{paddingLeft: 5, fontSize: 16}}
                            containerStyle={{width: '50%',}}
                            disabled
                        />
                        <Input
                            leftIcon={
                                <Image
                                    source={require('../../../../assets/time.png')}
                                    style={{height: '60%', aspectRatio: 1,}}
                                />
                            }
                            placeholder="Chọn thời gian"
                            placeholderTextColor='#000'
                            value={time}
                            onChangeText={(text) => setTime(text)}
                            inputContainerStyle={[styles.searchInput, {height: 35}]}
                            inputStyle={{paddingLeft: 5, fontSize: 16}}
                            containerStyle={{width: '50%'}}
                            disabled
                            onPressIn={()=>{}}
                        />
                    </View>
                </View>
                <View style={styles.component3}>
                    <Text style={{color: '#acc981', fontSize: 18, fontWeight: 600, paddingTop: 10,}}>Câu hỏi liên thường gặp</Text>
                    {/* <View style={styles.question}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.info}>
                                <View style={{height: '100%', aspectRatio: 1,}}>
                                    <Image
                                        source={require('../../../../assets/avt.png')}
                                        style={styles.avt}
                                        resizeMode='cover'
                                    />
                                </View>
                                
                                <View style={{gap: 5}}>
                                    <Text style={styles.name}>{name}</Text>
                                    <Text style={styles.timeStyle}>{time}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{justifyContent: 'center',}}><FontAwesomeIcon size={24} icon={faEllipsis} /></TouchableOpacity>
                        </View>
                        <View style={{paddingVertical: 10,}}>
                            <Text style={{fontSize: 16, textAlign: 'justify'}}>Thủ tục hành chính Xác nhận cam kết hoặc chứng nhận sản phẩm thủy sản xuất khẩu có nguồn gốc từ thủy sản khai thác nhập khẩu có phải bắt buộc hay không?</Text>
                        </View>
                        <TouchableOpacity><Text style={{alignSelf: 'flex-end', fontSize: 17, color: '#acc981'}}>Xem câu trả lời</Text></TouchableOpacity>
                    </View> */}
                    {data.map((item, key) => <QuestionCard
                    avatar={item.avatar}
                    userName={item.userName}
                    time={item.time}
                    content={item.content}
                    reply={item.reply}
                    trans={()=> {trans(item)}}
                    ques={item.ques}
                    notReplyed={item.notReplyed}
                    key={key}
                    />)}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Button
                    title={'Tạo câu hỏi'}
                    buttonStyle={styles.createQues}
                    onPress={()=> {navigation.navigate('CreateQuestion')}}
                />
            </View>
        </View>
    )
}

export default QuestionAns;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '8%',
        position: 'relative',
    },
    headerStyle: {
        paddingHorizontal: '3%',
        borderBottomWidth: 4,
        borderBottomColor: '#EEEEEE',
    },
    backStyle: {
        height: '100%',
        aspectRatio: 1,
    },
    buttonHeaderActive: {
        borderRadius: 200,
        backgroundColor: '#acc981',
        color: '#fff',
    },
    buttonHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    component2: {
        paddingTop: 15,
        paddingHorizontal: '3%',
        borderBottomWidth: 4, 
        borderBottomColor: '#EEEEEE',
    },
    searchInput: {
        borderBottomWidth: 0,
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 15,
        borderRadius: 30,
        height: 40,
    },
    buttonSearchStyle: {
        backgroundColor: '#acc981',
        borderRadius: 20,
    },

    containerScrollView: {
        flexGrow: 1,
        paddingBottom: 100,
    },
    component3: {
        paddingHorizontal: '3%',
    },
    question: {
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        paddingBottom: 10,
    },
    info: {
        flexDirection: 'row',
        height: 60,
        gap: 10,
        alignItems: 'center',
    },
    avt: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
    },
    name: {
        color: '#000',
        fontSize: 18,
        fontWeight: 700,
    },
    timeStyle: {
        color: '#696969',
        fontSize: 14,
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: '#fff',
        alignItems :'center',
        width: '100%',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
    },
    createQues: {
        backgroundColor: '#acc981',
        width: '100%',
        borderRadius: 20,
    }
})