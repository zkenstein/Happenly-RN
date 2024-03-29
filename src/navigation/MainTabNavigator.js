import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/tabs/Home/HomeScreen';
import SearchScreen from '../screens/tabs/Search/SearchScreen';
import FriendsScreen from '../screens/tabs/Friends/FriendsScreen';
import TicketsScreen from '../screens/tabs/Tickets/TicketsScreen';
import ProfileScreen from '../screens/tabs/Profile/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// --- Home Tab --- //
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? require('../../assets/images/icons/events1.png') : require('../../assets/images/icons/events0.png')}
      size={30}
      style={{ width: 30, height: 30 }}
    />
  ),
  tabBarOptions: { activeTintColor: Colors.pinkColor },
};

HomeStack.path = '';

// --- Search Tab --- //
const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? require('../../assets/images/icons/search1.png') : require('../../assets/images/icons/search0.png')}
      size={30}
      style={{ width: 30, height: 30 }}
    />
  ),
  tabBarOptions: { activeTintColor: Colors.pinkColor },
};

SearchStack.path = '';

// --- Friends Tab --- //
const FriendsStack = createStackNavigator(
  {
    Friends: FriendsScreen,
  },
  config
);

FriendsStack.navigationOptions = {
  tabBarLabel: 'Friends',
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? require('../../assets/images/icons/friends1.png') : require('../../assets/images/icons/friends0.png')}
      size={30}
      style={{ width: 30, height: 30 }}
    />
  ),
  tabBarOptions: { activeTintColor: Colors.pinkColor },
};

FriendsStack.path = '';

// --- Tickets Tab --- //
const TicketsStack = createStackNavigator(
  {
    Tickets: TicketsScreen,
  },
  config
);

TicketsStack.navigationOptions = {
  tabBarLabel: 'My Tickets',
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? require('../../assets/images/icons/tickets1.png') : require('../../assets/images/icons/tickets0.png')}
      size={30}
      style={{ width: 30, height: 30 }}
    />
  ),
  tabBarOptions: { activeTintColor: Colors.pinkColor },
};

TicketsStack.path = '';

// --- Profile Tab --- //
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? require('../../assets/images/icons/profile1.png') : require('../../assets/images/icons/profile0.png')}
      size={30}
      style={{ width: 30, height: 30 }}
    />
  ),
  tabBarOptions: { activeTintColor: Colors.pinkColor },
};

ProfileStack.path = '';

// --- Tab End --- //

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  FriendsStack,
  TicketsStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
