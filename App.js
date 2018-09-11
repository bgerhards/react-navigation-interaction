import React from 'react';

import InteractionProvider from 'react-native-interaction-provider';
import NavigationWrapper from './src/Navigation/NavigationWrapper';

export default class App extends React.Component {
  render() {
    return (
        <InteractionProvider
            timeout={3 * 1000}
            onActive={() => console.log('user is active')}
            onInactive={() => console.log('user is idle')}
        >
          <NavigationWrapper/>
        </InteractionProvider>
    );
  }
}
