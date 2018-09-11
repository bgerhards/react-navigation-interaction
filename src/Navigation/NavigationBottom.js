import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import PatientsTab from '../Patients/PatientsTab';
import AnalyticsTab from '../Analytics/AnalyticsTab';
import SettingsTab from '../Settings/SettingsTab';

export default createBottomTabNavigator({
      Home: {
        screen: PatientsTab,
        title: 'Home',
      },
      Analytics: {
        screen: AnalyticsTab,
        title: 'Analytics',
      },
      Settings: {
        screen: SettingsTab,
        title: 'Settingsa',
      },
    },
    {
      initialRouteName: 'Home',
    },
);