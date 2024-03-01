import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faEarthAsia} from '@fortawesome/free-solid-svg-icons'

const ForumNotiCard = (props) => {
    const {id, avatar, username, time, content, imageSlide} = props;

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    source={require('../../assets/avt.png')}
                    style={styles.image}
                />
                <View style={{height: '80%', justifyContent: 'space-between'}}>
                    <Text style={{color: '#89b05f', fontWeight: 600,}}>{username}</Text>
                    <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        <Text style={{color: '#44a093'}}>{time}</Text>
                        <TouchableOpacity><FontAwesomeIcon icon={faEarthAsia} color='#44a093' size={12}/></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize: 10, paddingVertical: 4,}}>{content}</Text>
                <View style={styles.imageForum}>
                    <Image
                        source={require('../../assets/ForumImg1.png')}
                        style={{height: 70, width: 108}}
                    />
                    <Image
                        source={require('../../assets/ForumImg2.png')}
                        style={{height: 70, width: 68}}
                    />
                </View>
            </View>
        </View>
    )
}

ForumNotiCard.propTypes = {
    id: propTypes.string,
    avatar: propTypes.string,
    username: propTypes.string,
    time: propTypes.string,
    content: propTypes.string,
    imageSlide: propTypes.array,
}

export default ForumNotiCard;



const styles= StyleSheet.create({
    container: {
        marginLeft: 20,
        padding: 7,
        height: 158,
        width: 202,
        backgroundColor: '#fff',
        borderRadius: 7,
    },
    profile: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#89b05f',
    },
    content: {
        // marginVertical: 5,
    },
    imageForum: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
    }
})