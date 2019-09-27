import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/common/TabBarIcon';
import HomeScreen from '../screens/ClubPostScreen';
import StudentScreen from '../screens/StuPostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ConfessionScreen from '../screens/ConfessionScreen';
import MoreScreen from '../screens/MoreScreen';
import AttendenceScreen from '../screens/AttendenceScreen';
import EditProfile from '../screens/EditProfile';
import SearchByName from '../screens/SearchByName';
import ClubList from '../screens/ClubList';
import AddConf from '../screens/AddConf';
// import WebViewScreen from '../screens/WebViewScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Clubs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const StudentStack = createStackNavigator({
  Home: StudentScreen,
  Profile: ProfileScreen
});

StudentStack.navigationOptions = {
  tabBarLabel: 'Students',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// const WebViewStack = createStackNavigator({
//   Home: WebViewScreen,
// });

// WebViewStack.navigationOptions = {
//   tabBarLabel: 'Students',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

const MoreStack = createStackNavigator({
  More: MoreScreen,
  Profile: ProfileScreen,
  Edit: EditProfile,
  SearchByName,
  ClubList
});

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const ConfessionStack = createStackNavigator({
  Settings: ConfessionScreen,
  AddConf
});

ConfessionStack.navigationOptions = {
  tabBarLabel: 'Confessions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const AttendenceStack = createStackNavigator({
  Settings: AttendenceScreen,
});

AttendenceStack.navigationOptions = {
  tabBarLabel: 'Attendence',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ConfessionStack,
  MoreStack,
  AttendenceStack,
  HomeStack,
  StudentStack,
  // WebViewStack
});
