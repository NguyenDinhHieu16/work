import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import propTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native';

const QuestionCard = (props) => {
    
    const navigation = useNavigation();
    const { id, avatar, userName, time, content, reply, trans, ques, notReplyed} = props;
    return (
        <View style={[styles.question, {paddingLeft: (reply == 0 ? 'auto' : 15)}, (ques? styles.border : null)]}>
            {userName !='' ? 
        
            <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={[styles.info, {justifyContent: (reply == 0 ? 'auto' : 'flex-end'), width: (reply == 0 ? 'auto' : '100%')}]}>
                    <View style={{height: '100%', aspectRatio: 1,}}>
                        <Image
                            source={require('../../assets/avt.png')}
                            style={styles.avt}
                            resizeMode='cover'
                        />
                    </View>
                    
                    <View style={{gap: 5}}>
                        <Text style={styles.name}>{userName}</Text>
                        <Text style={styles.timeStyle}>{time}</Text>
                    </View>
                </View>
                {reply == 0 ? <TouchableOpacity style={{justifyContent: 'center', }}><FontAwesomeIcon size={24} icon={faEllipsis} /></TouchableOpacity> : null}
            </View>
            <View style={{paddingVertical: 10,}}>
                <Text style={{fontSize: 16, textAlign: 'justify'}}>{content}</Text>
            </View>
            
            {reply == 0 && ques && !notReplyed ? 
                <TouchableOpacity onPress={()=> {trans()}}><Text style={{alignSelf: 'flex-end', fontSize: 17, color: '#acc981'}}>Xem câu trả lời</Text></TouchableOpacity> 
                : (notReplyed ? <Text style={{alignSelf: 'flex-end', fontSize: 17, color: '#acc981'}}>Đang chờ phản hồi</Text> : null)
            }
        </View> :
        <View>
            <Text style={{alignSelf: 'flex-end', fontSize: 17, color: '#acc981', fontWeight : 500}}>Phản hồi từ phòng ban</Text>
            <View style={{paddingVertical: 10,}}>
                <Text style={{fontSize: 16, textAlign: 'justify'}}>{content}</Text>
            </View>
            <Text style={[styles.timeStyle, {alignSelf: 'flex-end'}]}>{time}</Text>
        </View>}
        </View>
    )
}

QuestionCard.propTypes = {
    avatar: propTypes.string,
    userName: propTypes.string,
    time: propTypes.string,
    content: propTypes.string,
    reply: propTypes.number,
    trans: propTypes.func,
    ques: propTypes.bool,
    notReplyed: propTypes.bool,
};

export default QuestionCard;

const styles = StyleSheet.create({
    question: {
        paddingVertical: 15,
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
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
    }
});