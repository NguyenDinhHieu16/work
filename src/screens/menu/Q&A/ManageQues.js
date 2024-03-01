import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import QuestionCard from '../../../component/QuestionCard'

const ManageQues = () => {

    const navigation = useNavigation();
    const [isVisiable, setIsVisiable] = useState(true);

    const trans = (item) => {
        navigation.navigate('Answer', {ques: item, nameNavigate: 'ManageQues', titleHeader: 'Quản lý hỏi đáp'});
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
        },
        {
          id: 2,
          avatar: '../../assets/avt.png',
          userName: 'Nguyễn Đình Hiếu',
          time: '15:20 27/022024',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac magna...',
          reply: 0,
          ques: true,
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
          notReplyed: true,
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
                        <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '600',}}>Quản lý hỏi đáp</Text>
                    </View>
                    <View style={{flex: 1,}}></View>
                </View>
                <View style={{backgroundColor: '#EEEEEE', height: 40, borderRadius: 200, flexDirection: 'row', marginVertical: 15,}}>
                    <TouchableOpacity style={styles.buttonHeader} onPress={()=>{navigation.navigate('QuestionAns')}}>
                        <Text style={{fontSize: 16, fontWeight: 500,}}>Danh mục câu hỏi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonHeaderActive, styles.buttonHeader]} onPress={()=>{}}>
                        <Text style={{fontSize: 16, fontWeight: 500, color: '#fff',}}>Quản lý</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.HeaderQues}>
                    <TouchableOpacity style={[styles.questionSend, {borderBottomColor: (isVisiable? '#89b05f': '#EEEEEE')}]} onPress={() => {setIsVisiable(true)}}>
                        <Text style={{fontSize: 16, fontWeight: 500, color: (isVisiable?'#89b05f': null)}}>Đã gửi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.questionSend, {borderBottomColor: (isVisiable? '#EEEEEE': '#89b05f')}]} onPress={() => {setIsVisiable(false)}}>
                        <Text style={{fontSize: 16, fontWeight: 500, color: (!isVisiable?'#89b05f': null)}}>Đã phản hồi</Text>
                    </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: '3%',}}>
                {isVisiable && (data.map((item, key) => <QuestionCard
                        avatar={item.avatar}
                        userName={item.userName}
                        time={item.time}
                        content={item.content}
                        reply={item.reply}
                        trans={()=> {trans(item)}}
                        ques={item.ques}
                        notReplyed={item.notReplyed}
                        key={key}
                    />))
                }
                {!isVisiable && (data.filter(item => item.notReplyed === undefined).map((item, key) => (
                        <QuestionCard
                        avatar={item.avatar}
                        userName={item.userName}
                        time={item.time}
                        content={item.content}
                        reply={item.reply}
                        trans={()=> {trans(item)}}
                        ques={item.ques}
                        notReplyed={item.notReplyed}
                        key={key}
                        />
                    )))}
            </ScrollView>
        </View>
    )
}

export default ManageQues;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '8%',
        position: 'relative',
    },
    headerStyle: {
        paddingHorizontal: '3%',
        // borderBottomWidth: 4,
        // borderBottomColor: '#EEEEEE',
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
    HeaderQues: {
        flexDirection: 'row', 
        
    },
    questionSend: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        paddingBottom: 10,
        borderBottomColor: '#EEEEEE',
    }
})
