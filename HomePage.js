import {Button, StyleSheet} from 'react-native';
import React from 'react';
import Learn from './Learn';
import MyProfile from './Profile';
import Progress from './Progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function HomePage() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Learn') {
            iconName = 'book';
          } else if (route.name === 'Progress') {
            iconName = 'line-chart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#8DC4BB',
        // headerShown: false,
      })}
      backBehavior={'history'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen
        name="Profile"
        component={MyProfile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
