import React from 'react';
import {createStackNavigator} from 'react-navigation';
import PatientsScreen from '../Patients/PatientsScreen';
import Patient from './Patient';

export default createStackNavigator({
      Home: {
        screen: PatientsScreen,
        title: 'Active Patients',
      },
      Patient: {
        screen: Patient,
      },
    },
    {
      initialRouteName: 'Home',
    },
);