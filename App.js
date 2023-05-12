import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screensBahsegel from './src/screensBahsegel';
import iconsBahsegel from './src/iconsBahsegel';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(...iconsBahsegel);

const Stack = createNativeStackNavigator();

function App() {
  const renderScreens = () => {
    return screensBahsegel.map(screen => (
      <Stack.Screen
        name={screen.name}
        options={{headerShown: false}}
        component={screen.component}
        key={screen.name}
      />
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
