import { createBottomTabNavigator, useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from 'react'
import HomePage from "../screens/home/HomePage/HomePage";
import ForumScreen from "../screens/home/Forum/ForumScreen";
import ApartmentScreen from "../screens/home/apartment/ApartmentScreen";
import Person from "../screens/home/Profile/Person";
import { Image, Text, View, StyleSheet } from "react-native";
import QRCode from "../screens/home/qrCode/QRCode";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {

    // const CustomTabBar = () => {
    //   return (
    //     <View style={styles.tabBar}>
    //       <View>
    //       <Image source={require('../../assets/IconTabbar/Home=Yes.png')} style={{ height: 30, width: 30, marginLeft: 10, marginRight: 12,}}/>
    //       <Text style={styles.tab}>Tab 1</Text>
    //       </View>
    //       <View>
    //       <Image source={require('../../assets/IconTabbar/Home=Yes.png')} style={{ height: 30, width: 30, marginLeft: 10, marginRight: 12,}}/>
    //       <Text style={styles.tab}>Tab 1</Text>
    //       </View>
    //       <View>
    //       <Image source={require('../../assets/IconTabbar/Home=Yes.png')} style={{ height: 30, width: 30, marginLeft: 10, marginRight: 12,}}/>
    //       <Text style={styles.tab}>Tab 1</Text>
    //       </View>
    //       <View>
    //       <Image source={require('../../assets/IconTabbar/Home=Yes.png')} style={{ height: 30, width: 30, marginLeft: 10, marginRight: 12,}}/>
    //       <Text style={styles.tab}>Tab 1</Text>
    //       </View>
    //       <View>
    //       <Image source={require('../../assets/IconTabbar/Home=Yes.png')} style={{ height: 30, width: 30, marginLeft: 10, marginRight: 12,}}/>
    //       <Text style={styles.tab}>Tab 1</Text>
    //       </View>
    //     </View>
    //   );
    // };

    return (
        <Tab.Navigator
          // tabBar={CustomTabBar}
          // tabBarOptions={{
            
          // }} 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'HomeScreen') {
                iconName = focused ? require('../../assets/IconTabbar/Home=Yes.png') : require('../../assets/IconTabbar/Home=No.png');
              } else if (route.name === 'Forum') {
                iconName = focused ? require('../../assets/IconTabbar/Forum=Yes.png') : require('../../assets/IconTabbar/Forum=No.png');
              } else if (route.name === 'Apartment') {
                iconName = focused ? require('../../assets/IconTabbar/house=Yes.png') : require('../../assets/IconTabbar/house=No.png');
              } else if (route.name === 'Person') {
                iconName = focused ? require('../../assets/IconTabbar/Person=Yes.png') : require('../../assets/IconTabbar/Person=No.png');
              }
    
              return <Image source={iconName} style={{ height: 25, width: 25, marginLeft: 10, marginRight: 12,}}/>
            },
            tabBarStyle: {height: 60},
            tabBarActiveTintColor: '#FEB47B', // Màu chữ của tab được chọn
            tabBarInactiveTintColor: '#89b05f', // Màu chữ của các tab không được chọn
            tabBarLabelStyle: { // Style của chữ của tab
              fontSize: 14, 
              fontWeight: '500',
              paddingBottom: 5,
            },
          })}
            
          
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomePage}
                options={{
                      title: 'Trang chủ',
                      headerShown: false,
                }}
            />

            <Tab.Screen
                name='Forum'
                component={ForumScreen}
                options={{
                    title: 'Diễn đàn'
                }}
            />

            <Tab.Screen
                name='QRCode'
                component={QRCode}
                options={{
                  tabBarIcon: () => {
                    return (
                      <Image
                        style={{
                          height: 30,
                          width: 30,
                          marginLeft: 10,
                          marginRight: 12,
                        }}
                        source={require('../../assets/IconTabbar/QR.png')}
                      />
                    );
                  },
                  title:'',
                }}
            />

            <Tab.Screen
                name='Apartment'
                component={ApartmentScreen}
                options={{
                    
                    title: 'Căn hộ',
                }}
            />

            <Tab.Screen
                name='Person'
                component={Person}
                options={{
                    
                    title: 'Cá nhân',
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff', // Màu nền của bottom navigation
    borderTopWidth: 1, // Độ dày của đường viền phía trên
    borderTopColor: 'gray', // Màu của đường viền phía trên
    height: 200,
  },
})