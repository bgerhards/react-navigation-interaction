import React from 'react';
import {Button, Text, View} from 'react-native';

const patient = {firstName: 'Brian', lastName: 'Gerhards', age: 16, sex: 'M'};

const PatientsScreen = (props) => {
  return (
      <View>
        <Text>Hello world</Text>
        <Button
            title="Go to Analytics >>>"
            onPress={() => props.navigation.navigate('Analytics')}
        />
        <Button
            title="Go to Settings >>>"
            onPress={() => props.navigation.navigate('Settings')}
        />
        <Button
          title="View Patient: Brian Gerhards"
          onPress={() => props.navigation.push('Patient', {patient: patient})}
          />
      </View>
  );
};

PatientsScreen.navigationOptions = {
  title: 'Patients',
};

export default PatientsScreen;