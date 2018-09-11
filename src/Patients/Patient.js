import React from 'react';
import {Button, Text, View} from 'react-native';

const Patient = (props) => {
  const patient = props.navigation.getParam('patient', {});
  return (
      <View>
        <Text>{patient.firstName} {patient.lastName}</Text>
        <Text>Age: {patient.age}</Text>
        <Text>Sex: {patient.sex}</Text>
        <Button
            title={'Return'}
            onPress={() => props.navigation.goBack()}/>
      </View>
  );
};

const headerName = ({firstName, lastName}) => {
  return `${firstName} ${lastName}`;
};

Patient.navigationOptions = ({navigation}) => {
  return {
    title: headerName(navigation.getParam('patient', {})),
  };
};

export default Patient;