import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { adaptNavigationTheme } from 'react-native-paper';

import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  TabNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

export default function RootStack() {
  return (
    <NavigationContainer
      theme={{
        ...LightTheme,
        fonts: { ...NavigationDefaultTheme.fonts },
      }}>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
