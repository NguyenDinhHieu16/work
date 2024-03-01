import { LinearGradient } from "expo-linear-gradient";
import {View, Text, StyleSheet, Image} from 'react-native'
import { Button, Input } from "@rneui/themed";
import React,{ useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Shopping = () => {

    const navigation = useNavigation()
    const [search, setSearch] = useState('')

    return (
        <LinearGradient
            colors={['#C9DCAC', '#FFFFFF']}
            style={styles.linearGradient}>
    
            <View style={styles.container}>
                {/* <View style={{flexDirection: 'row', width: '100%', backgroundColor: 'red', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Image
                        source={require('../../../../assets/Icon/Back.png')}
                    />
                    <View style={{backgroundColor: 'green', alignItems: 'center'}}>
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
                    <Button
                        title={'nguyend'}
                        onPress={()=> {navigation.navigate('QuestionAns')}}
                        leftIcon={
                            <Image
                                source={require('../../../../assets/search.png')}
                                style={{height: '60%', aspectRatio: 1,}}
                            />
                        }
                    />
                    {/* <View style={{flexDirection: 'row'}}>
                        <Image
                            source={require('../../../../assets/Icon/Cart=yes.png')}
                            style={{alignSelf:'flex-end'}}
                        />
                        <Image
                            source={require('../../../../assets/IconShopping2/Property1=Menu.png')}
                            style={{alignSelf: 'flex-end'}}
                        />
                    </View>
                </View> */}
                <View style={{marginVertical: 15, flexDirection: 'row', width: '100%', height: 40, justifyContent: 'space-between'}}>
                        <Image
                                source={require('../../../../assets/Icon/Back.png')}
                                style={styles.icon}
                            />
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
                        <Image
                            source={require('../../../../assets/Icon/Cart=yes.png')}
                            style={{alignSelf: 'center'}}
                        />
                        <Image
                            source={require('../../../../assets/IconShopping2/Property1=Menu.png')}
                            style={{alignSelf: 'center'}}
                        />
                </View>
            </View>
        </LinearGradient>
    )
}

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: '8%',
    marginHorizontal: '3%',
  },
  icon: {
    alignSelf: 'center', 
    width: 30, 
    aspectRatio: 1,
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
});
export default Shopping;