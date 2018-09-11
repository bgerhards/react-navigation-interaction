import React from 'react';
import {createStackNavigator} from 'react-navigation';
import AnalyticsScreen from '../Analytics/AnalyticsScreen';

export default createStackNavigator({
      Analytics: {
        screen: AnalyticsScreen,
        title: 'Analytics',
      },
    },
    {
      initialRouteName: 'Analytics',
    },
);