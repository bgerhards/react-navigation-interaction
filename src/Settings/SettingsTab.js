import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SettingsScreen from '../Settings/SettingsScreen';

export default createStackNavigator({
      Settings: {
        screen: SettingsScreen,
        title: 'Settings',
      },
    },
    {
      initialRouteName: 'Settings',
    },
);