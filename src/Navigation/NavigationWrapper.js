import React from 'react';
import {View} from 'react-native';
import Navigation from './NavigationBottom';

const NavigationWrapper = (props) => {
  return (
      <View style={{flex: 1}} {...props}>
        <Navigation/>

      </View>
  );
};

export default NavigationWrapper;