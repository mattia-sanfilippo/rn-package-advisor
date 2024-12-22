import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { adaptNavigationTheme } from 'react-native-paper';
import { CategoryScreen } from 'screens/Category';
import { Package, PackageScreen } from 'screens/Package';

import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  TabNavigator: undefined;
  Category: { categoryId: string };
  Package: { nPackage: Package };
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
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Package" component={PackageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
