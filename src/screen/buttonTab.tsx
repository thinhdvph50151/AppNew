import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native'; 
import Home from './home';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Detail from './detail';
import Today from './today';
import Arcade from './arcade';
import Search from './search';
import AppMy from './app';
import HomeScreen from './detail';
import App from './app';
const ButtonTab = () => {
    const Tab = createBottomTabNavigator();
  return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName = 'star';
                if(route.name === 'Trò chơi'){
                    iconName = 'rocket';  
                }else if(route.name==='TodayApp'){
                    iconName='list'
                }
                else if(route.name==='App'){
                    iconName='th-large'
                }
                else if(route.name==='Arcade'){
                    iconName='user'
                }
                else if(route.name==='Tìm kiếm'){
                    iconName='search'
                }
                return <FontAwesome name={iconName} size={size} color={color} />
            },
            tabBarStyle:{
                backgroundColor:"#000",
                opacity:0.87,
                height:60,
                paddingBottom:6
            }

        })}
        >
            
             <Tab.Screen
             name='TodayApp'
             component={Today   }
             options={{headerShown:false,title:'Hôm nay'}}
             />
             <Tab.Screen 
            name='Trò chơi' 
            component={Home}
            options={{headerShown: false}}
             />
             <Tab.Screen
             name='Detail'
             component={Detail}
             options={{headerShown:false,title:'Ứng dụng'}}
             />
             <Tab.Screen
             name='Arcade'
             component={Arcade}
             options={{headerShown:false}}
             />
             <Tab.Screen
             name='Tìm kiếm'
             component={Search}
             options={{headerShown:false}}
             />
             <Tab.Screen
             name='App'
             component={App}
             options={{headerShown:false}}
             />
        </Tab.Navigator>
  )
};

export default ButtonTab;
