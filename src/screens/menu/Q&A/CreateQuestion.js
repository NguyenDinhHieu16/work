import React, {useState} from 'react'
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform,} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { CheckBox, Button } from '@rneui/themed';

const CreateQuestion = () => {

    const navigation = useNavigation();
       

          this.inputRefs = {
        firstTextInput: null,
        favSport0: null,
        favSport1: null,
        lastTextInput: null,
        favSport5: null,
      };

    const [isActive, setIsVisible] = useState(true);//focus element left

    const clickButton = () => {
        setIsVisible(!isActive);
    }

    const sports = [
        {
          label: 'Item1',
          value: 'item1',
        },
        {
          label: 'Item2',
          value: 'item2',
        },
        {
          label: 'Item3',
          value: 'item3',
        },
      ];

    const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
      const [part, setPart] = useState('');
      const [selectedIndex, setIndex] = React.useState(0);

  const handleSave = () => {
    // Xử lý dữ liệu khi người dùng lưu
    console.log('Department:', department);
    console.log('Role:', role);
    console.log('Topic:', topic);
    console.log('Title:', title);
    console.log('Description:', description);
  }

    const placeholder1 = {
      label: 'Phòng liên quan',
      value: null,
      fontSize: 16,
      color: '#9EA0A4',
    };
    const placeholder2 = {
        label: 'Chọn tiêu đề',
        value: null,
        fontSize: 16,
        color: '#9EA0A4',
      };

    return(
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
            <View style={styles.component2}>
                <Text style={{color: '#acc981', fontSize: 18, fontWeight: 600, paddingVertical: 20,}}>Tạo câu hỏi hoặc kiến nghị</Text>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.pickerInput}>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.label, {fontWeight: 600}]}>Bộ phận</Text>
                            <View style={{flex: 3,}}>
                            <RNPickerSelect
                                placeholder={placeholder1}
                                items={sports}
                                onValueChange={value => {
                                    setPart(value)
                                }}
                                style={pickerSelectStyles}
                                value={part}
                                useNativeAndroidPickerStyle={false}
                                Icon={() => {
                                    return <View style={styles.iconPicker}><FontAwesomeIcon icon={faChevronRight} color='#696969'/></View>;
                                }}
                            />
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.label, {fontWeight: 600}]}>Bạn là</Text>
                            <View style={{flex: 3, flexDirection: 'row',}}>
                                <CheckBox
                                    checked={selectedIndex === 0}
                                    onPress={() => setIndex(0)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    title={'Công nhân'}
                                    containerStyle={{padding: 0, marginLeft: 0,}}
                                    textStyle={{fontSize: 16, fontWeight: 'normal',}}
                                />
                                <CheckBox
                                    checked={selectedIndex === 1}
                                    onPress={() => setIndex(1)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    title={'Doanh nghiệp'}
                                    containerStyle={{padding: 0}}
                                    textStyle={{fontSize: 16, fontWeight: 'normal',}}
                                />
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.label, {fontWeight: 600}]}>Chủ đề</Text>
                            <View style={{flex: 3,}}>
                                <RNPickerSelect
                                    placeholder={placeholder2}
                                    items={sports}
                                    onValueChange={value => {
                                        setTopic(value)
                                    }}
                                    style={pickerSelectStyles}
                                    value={topic}
                                    useNativeAndroidPickerStyle={false}
                                    Icon={() => {
                                        return <View style={styles.iconPicker}><FontAwesomeIcon icon={faChevronRight} color='#696969'/></View>;
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.label, {fontWeight: 600}]}>Tiêu đề</Text>
                            <View style={{flex: 3,}}>
                            <TextInput
                                placeholder='Ghi tiêu đề câu hỏi'
                                style={{fontSize: 16}}
                                // placeholderTextColor={'#000'}
                            />
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={[styles.label, {fontWeight: 600, paddingBottom: 15}]}>Mô tả chi tiết</Text>
                            <View style={{flex: 3,}}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Nhập nội dung câu hỏi của bạn"
                                multiline
                                value={description}
                                onChangeText={setDescription}
                            />
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <Button
                                title={'Gửi câu hỏi'}
                                titleStyle={{fontWeight: 500}}
                                buttonStyle={styles.createQues}
                                onPress={()=> {navigation.navigate('QuestionAns')}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )           
    
}

export default CreateQuestion;

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
    },
    buttonHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    component2: {
        paddingHorizontal: '3%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    label: {
        fontSize: 16, 
        fontWeight: 600,
        flex: 1,
        paddingVertical: 12,
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    iconPicker: {
        height: 40,
        justifyContent: 'center',
        width: 30,
    },
    inputRadio: {
        flexDirection: 'row',
    },
    textInput: {
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        height: 150,
        backgroundColor: '#EEEEEE',
        fontSize: 16,
    },
    footer: {
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
  
  
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 30,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: '#EEEEEE',
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: '#EEEEEE',
    },
    
  });
