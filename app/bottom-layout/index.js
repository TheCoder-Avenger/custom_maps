/**
 * External dependencies
 */
import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/**
 * Internal dependencies
 */
import Navigation from '../screens/navigation';
import Map from '../screens/map';
import Add from '../screens/add';
import Notification from '../screens/notification';
import User from '../screens/user';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Navigation"
        component={Navigation}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/compass.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: !focused ? '#000' : '#ff6961',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/map.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: !focused ? '#000' : '#ff6961',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: '#ff6961',
                padding: 10,
                borderRadius: 50,
                bottom: 15,
              }}>
              <Image
                source={require('../assets/icons/plus.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: !focused ? '#fff' : '#fff',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/bell.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: !focused ? '#000' : '#ff6961',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/user.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: !focused ? '#000' : '#ff6961',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
