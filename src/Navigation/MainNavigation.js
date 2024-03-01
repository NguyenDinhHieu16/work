import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FlashSCreen from '../screens/FlashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import HomePage from '../screens/home/HomePage/HomePage';
import HomeNavigation from './HomeNavigation';
import QuestionAns from '../screens/menu/Q&A/QuestionAns';
import Answer from '../screens/menu/Q&A/Answer';
import CreateQuestion from '../screens/menu/Q&A/CreateQuestion';
import ManageQues from '../screens/menu/Q&A/ManageQues';
import Shopping from '../screens/menu/Shopping/Shopping';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Shopping'
                component={Shopping}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='FlashScreen'
                component={FlashSCreen}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{headerShown: false}}  
            />
            <Stack.Screen
                name='SignupScreen'
                component={SignupScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='Home'
                component={HomeNavigation}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='QuestionAns'
                component={QuestionAns}
                options={{
                    headerShown: false,
                }}
            />
            
            <Stack.Screen
                name='Answer'
                component={Answer}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name='CreateQuestion'
                component={CreateQuestion}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name='ManageQues'
                component={ManageQues}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}

export default MainNavigation;