import React, {useState} from 'react'
import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import ForumNotiCard from '../../../component/ForumNotiCard';

const HomePage = () => {

    const navigation = useNavigation();

    const name = "Nguyễn Đình Hiếu";
    const notiCount = 25;

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleScrollNoti, setIsVisibleScrollNoti] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const data = [
        { username: 'Nguyễn Đình A', time: '02-02-2023', image: require('../../../../assets/noti1.png') },
        { username: 'Nguyễn Đình B', time: '03-02-2023', image: require('../../../../assets/noti2.png') },
        { username: 'Nguyễn Hoàng Long', time: '04-02-2023', image: require('../../../../assets/noti2.png') },
      ];
      const dataForum = [
        { username: 'Nguyễn Đình A', time: '2 giờ', content: 'Tầng 3 được cải tạo, tập trung thành khu Văn-Thể-Mỹ. Có phòng bóng bàn' },
        { username: 'Nguyễn Đình B', time: '3 giờ', content: 'Tầng 3 được cải tạo, tập trung thành khu Văn-Thể-Mỹ. Có phòng bóng bàn' },
        { username: 'Nguyễn Hoàng Long', time: '4 giờ', content: 'Tầng 3 được cải tạo, tập trung thành khu Văn-Thể-Mỹ. Có phòng bóng bàn' },
      ];

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.headerMenu}>
                    <View style={styles.profile}>
                        <View style={{height: '100%', aspectRatio: 1,}}>
                            <Image
                                source={require('../../../../assets/avt.png')}
                                style={styles.avt}
                                resizeMode='cover'
                            />
                        </View>
                        
                        <View style={styles.name}>
                            <Text style={styles.hello}>Yoolife xin chào!</Text>
                            <Text style={styles.name}>{name}</Text>
                        </View>
                    </View>

                    <View style={styles.noti}>
                        <Text style={{color: '#89b05f', fontSize:18,}}>{notiCount}</Text>
                        <Image source={require('../../../../assets/IconMainRCU/IconTB/noti.png')} style={styles.iconNoti}/>
                    </View>
                </View> 
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.icon} onPress={() => {navigation.navigate('Shopping')}}>
                        <View style={styles.itemMenu}>
                            <Image
                                source={require('../../../../assets/IconPinB2B/Market.png')}
                                style={styles.imageIcon}
                                resizeMode="cover"
                            />
                        </View>
                        <Text style={styles.desIcon}>Mua sắm</Text>
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <View style={styles.itemMenu}>
                            <Image
                                source={require('../../../../assets/IconPinB2B/DichVu.png')}
                                style={styles.imageIcon}
                                resizeMode="cover"
                            />
                        </View>
                        <Text style={styles.desIcon}>Dịch vụ</Text>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.itemMenu}>
                            <Image
                                source={require('../../../../assets/IconPinB2B/Map.png')}
                                style={styles.imageIcon}
                                resizeMode="cover"
                            />
                        </View>
                        <Text style={styles.desIcon}>Bản đồ</Text>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.itemMenu}>
                            <Image
                                source={require('../../../../assets/IconPinB2B/EcoFarm.png')}
                                style={styles.imageIcon}
                                resizeMode="cover"
                            />
                        </View>
                        <Text style={styles.desIcon}>EcoFarm</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.container2} contentContainerStyle={[styles.container, {paddingTop: 0, paddingBottom: '50%',}]}>
                <View style={styles.options}>
                    <View style={styles.menu}>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconMain/Khaosat.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Khảo sát</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconMain/Feedback.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Phản ánh</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconMain/HC.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Hành chính</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconMain/Payment.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Hóa đơn</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconMain/DV.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Dịch vụ BQL</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconMain/Search.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Tra cứu</Text>
                        </View>
                        <TouchableOpacity style={styles.icon} onPress={()=> {navigation.navigate({name: 'QuestionAns'});}}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconMain/Q&A.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Hỏi đáp</Text>
                        </TouchableOpacity>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconMain/Chat.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Chat</Text>
                        </View>
                    </View>        
       {/* colors={['#c5d98a', '#9cc76f']} */}
                    <View style={styles.thongbao}>
                        <View style={styles.headerNoti}>
                            <View style={styles.leftNoti}>
                                <TouchableOpacity onPress={() => {setIsVisibleScrollNoti(true)}}>
                                    <Text style={{fontSize: 18, color: '#44a093', fontWeight: 'bold'}}>Thông báo nội khu</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '50%', backgroundColor: '#eff4e1',}}>
                            
                            <View style={styles.rightNoti}>
                                <TouchableOpacity onPress={() => {setIsVisibleScrollNoti(false)}}>
                                    <Text style={{alignSelf: 'flex-end', fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Diễn đàn</Text>
                                </TouchableOpacity>
                            </View>
                            
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%',}}>
                        {isVisibleScrollNoti && <ScrollView horizontal style={styles.containerx}>
                            <View style={styles.mainNoti}>
                                <Image
                                    source={require('../../../../assets/noti1.png')}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                                <Text style={{color: '#fff', fontSize: 14}}>Thông báo cung cấp tuyến</Text>
                                <View style={{flexDirection: 'row', alignItems:'center'}}>
                                    <Image
                                        source={require('../../../../assets/dateTime.png')}
                                        // style={{}}
                                        resizeMode="cover"
                                    />
                                    <Text style={{color: '#fff', fontSize: 14}}>02-02-2023</Text>
                                </View>
                            </View>
                            <View style={styles.mainNoti}>
                                <Image
                                    source={require('../../../../assets/noti1.png')}
                                    style={[styles.image]}
                                    resizeMode="cover"
                                />
                                <Text style={{color: '#fff'}}>Thông báo cung cấp tuyến</Text>
                                <View style={{flexDirection: 'row', alignItems:'center'}}>
                                    <Image
                                        source={require('../../../../assets/dateTime.png')}
                                        // style={{}}
                                        resizeMode="cover"
                                    />
                                    <Text style={{color: '#fff', fontSize: 14}}>02-02-2023</Text>
                                </View>
                            </View>
                            <View style={styles.mainNoti}>
                                <Image
                                    source={require('../../../../assets/noti2.png')}
                                    style={[styles.image]}
                                    resizeMode="cover"
                                />
                                <Text style={{color: '#fff'}}>Thông báo cung cấp tuyến</Text>
                                <View style={{flexDirection: 'row', alignItems:'center'}}>
                                    <Image
                                        source={require('../../../../assets/dateTime.png')}
                                        // style={{}}
                                        resizeMode="cover"
                                    />
                                    <Text style={{color: '#fff', fontSize: 14}}>02-02-2023</Text>
                                </View>
                            </View>
                            <View style={styles.mainNoti}>
                                <Image
                                    source={require('../../../../assets/noti2.png')}
                                    style={[styles.image]}
                                    resizeMode="cover"
                                />
                                <Text style={{color: '#fff'}}>Thông báo cung cấp tuyến</Text>
                                <View style={{flexDirection: 'row', alignItems:'center'}}>
                                    <Image
                                        source={require('../../../../assets/dateTime.png')}
                                        // style={{}}
                                        resizeMode="cover"
                                    />
                                    <Text style={{color: '#fff', fontSize: 14}}>02-02-2023</Text>
                                </View>
                            </View>
                            <TouchableOpacity>  
                                <View style={[styles.mainNoti, styles.seeAll]}>
                                                                
                                        <FontAwesomeIcon icon={faRightToBracket} color='#fff' size={30}/>
                                        <Text style={{color: '#fff', textAlign: 'center', fontWeight: 500}}>Xem tất cả thông báo</Text>
                                    
                                </View>
                            </TouchableOpacity>
                            </ScrollView>
                        }
                        {!isVisibleScrollNoti && <ScrollView horizontal style={styles.containerx}>
                            {dataForum.map((item, key) => <ForumNotiCard
                                avatar={item.avatar}
                                username={item.username}
                                time={item.time}
                                content={item.content}
                                key={key}
                            />)}
                            <TouchableOpacity>  
                                <View style={[styles.mainNoti, styles.seeAll, {height: 158, backgroundColor: '#fff'}]}>
                                                                
                                        <FontAwesomeIcon icon={faRightToBracket} color='#89b05f' size={30}/>
                                        <Text style={{color: '#89b05f', textAlign: 'center', fontWeight: 500}}>Đi tới bảng tin</Text>
                                    
                                </View>
                            </TouchableOpacity>
                            </ScrollView>}
                        </View>
                    
                    </View>

                </View>
                <View style={[styles.more, {marginTop: '3%'}]}>
                    <Text style={{fontSize: 20, color: '#44a093', paddingLeft: '5%', fontWeight: 700,}}>Tiện ích nội khu</Text>
                    <View style={{marginTop: '3%', backgroundColor: '#c2d889', paddingTop:'5%', flexDirection: 'row', flexWrap: 'wrap',}}>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/cau_long.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Mua sắm</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Gym.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Gym</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/pingpong.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Bóng bàn</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Yoga.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Yoga</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Food.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Đồ ăn</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Medical.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Hiệu thuốc</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Drink.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Đồ uống</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Parking.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Khu vui chơi</Text>
                        </View>

                        {isVisible && (
                            <View style={{ backgroundColor: '#c2d889', flexDirection: 'row', flexWrap: 'wrap',}}>
                                <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/cau_long.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Mua sắm</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Gym.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Gym</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/pingpong.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Bóng bàn</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Yoga.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Yoga</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Food.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Đồ ăn</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Medical.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Hiệu thuốc</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Drink.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Đồ uống</Text>
                        </View>
                        <View style={styles.icon}>
                            <View style={styles.optionmenu}>
                                <Image
                                    source={require('../../../../assets/IconTT/Parking.png')}
                                    style={styles.imageIcon}
                                    resizeMode="cover"
                                />
                            </View>
                            <Text style={styles.desIcon}>Khu vui chơi</Text>
                        </View>
                            </View>
                        )}
                        
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 30}}>
                            <View style={{backgroundColor: '#89b05f', width: '35%',}}><View style={{borderBottomRightRadius: 20, backgroundColor: '#c2d889', height: '100%',}}><Text></Text></View></View>
                            <TouchableOpacity style={{borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#89b05f', width: '30%', alignItems: 'center',justifyContent: 'center',}} onPress={()=> {toggleVisibility()}}><Text style={{fontSize: 14, color: '#fff', fontWeight: 600,}}>{!isVisible? 'Xem Thêm' : 'Thu gọn'}</Text></TouchableOpacity>
                            <View style={{backgroundColor: '#89b05f', width: '35%',}}><View style={{borderBottomLeftRadius: 20, backgroundColor: '#c2d889', height: '100%',}}><Text></Text></View></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingTop: '8%',
    },

    container1: {
        height: '23%',
        borderWidth: 1.5,
        borderTopWidth: 0,
        borderColor: '#C9DCAC',
        borderRadius: 30,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 20,
        // shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        gap: '20%',
    },
    headerMenu: {
        flexDirection: 'row',
        height: '35%',
        paddingHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile: {
        flexDirection: 'row',
        height: '100%',
        gap: 10,
        alignItems: 'center',
    },
    hello: {
        fontSize: 18,
    },
    name: {
        color: '#89b05f',
        fontSize: 20,
    },
    avt: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
    },
    noti: {
        height: '80%',
        aspectRatio: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap :5,
    },
    iconNoti: {
        height: '60%',
        width: '60%',
        resizeMode:'cover',
    },
    menu: {
        flexDirection: 'row',
        paddingHorizontal: '3%',
        flexWrap: 'wrap',
    },
    icon: {
        justifyContent: 'center',
        // backgroundColor: 'red',
        width: '25%',
        alignItems:'center',
        gap: '10%',
        paddingBottom: '3%',
    },
    itemMenu: {
        borderWidth: 1.5,
        borderColor: '#89b05f',
        borderRadius: 8,
        padding: 2,
    },
    imageIcon: {
        padding: 25,
    },
    desIcon: {
        fontSize: 14,
        fontWeight: 600,
    },

    container2: {
        paddingTop: '5%',
    },
    optionmenu: {
        backgroundColor: '#f3fbed',
        borderRadius: 8,
        padding: 4,
    },

    thongbao: {
        backgroundColor: '#c5d98a',
        borderRadius: 10,
        overflow: 'hidden',
        paddingBottom: 10,
    },
    headerNoti: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
    },
    leftNoti: {
        backgroundColor: '#eff4e1',
        width: '50%',
        paddingLeft: '5%',
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 30,
    },
    rightNoti: {
        borderTopLeftRadius: 30,
        backgroundColor: '#c5d98a',
        alignContent: 'center',
        justifyContent: 'center', 
        paddingRight: '10%', 
        height: '100%',
        width: '100%',
        borderWidth: 0,
    },
    mainNoti: {
        gap: '5%',
        marginLeft: 20,
    },

    containerx: {
        flexGrow: 1,
        flexDirection: 'row', // Đảm bảo các item được xếp theo chiều ngang
      },
    seeAll: {
        borderWidth: 3, 
        backgroundColor:'#616161', 
        borderColor: '#fff', 
        borderRadius: 10, 
        width: 90, 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 111, 
        marginRight: 10,
    },
    image: {
        height: 111,
        width: 171,
        borderRadius: 7,
        borderWidth: 3,
        borderColor: '#fff',
    }
})