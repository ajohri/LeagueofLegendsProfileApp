/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import Login from './screens/Login';
import Notifications from './screens/Notifications';
import Search from './screens/Search';
import SearchResult from './screens/SearchResult'

const DrawerExample = DrawerNavigator(
  {
    // Login_Screen: {
    //   path:'/',
    //   screen: Login,
    // },
    Second: {
      path:'/',
      screen: FirstScreen,
    },
    Third: {
      path:'/',
      screen: SecondScreen,
    },
    Fourth: {
      path:'/',
      screen: ThirdScreen,
    },
    // Fifth: {
    //   path:'/',
    //   screen: FourthScreen,
    // },
    // Notification: {
    //   path:'/',
    //   screen: Notifications,
    // },
    // Search: {
    //   path:'/',
    //   screen: Search,
    // },
    // SearchResult: {
    //   path: '/',
    //   screen: SearchResult,
    // }
  },
  {
    initialRoutename: 'Profile',
    drawerPosition: 'right'
  }
);

export default DrawerExample;
