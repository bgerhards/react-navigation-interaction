import React from 'react';
import {Button, Text, View} from 'react-native';

const AnalyticsScreen = (props) => {
  return (
      <View>
        <Text>Your analytics breakdown:</Text>
        <Text>Some stuff</Text>
        <Button
            title={'Go back'}
            onPress={() => props.navigation.goBack()}/>
      </View>
  );
};

AnalyticsScreen.navigationOptions = {
  title: 'Analytics',
};

export default AnalyticsScreen;
