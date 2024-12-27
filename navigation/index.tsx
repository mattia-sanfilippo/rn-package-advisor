import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { adaptNavigationTheme } from 'react-native-paper';
import { AddReview } from 'screens/AddReview';
import { CategoryScreen } from 'screens/Category';
import { Package, PackageScreen } from 'screens/Package';
import { TagScreen } from 'screens/Tag';

import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  TabNavigator: undefined;
  Category: { categoryId: string };
  Package: { nPackage: Package };
  Tag: { tag: string };
  AddReview: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Categories':
      return 'Categories';
    case 'Search':
      return 'Search';
  }
};

export default function RootStack() {
  return (
    <NavigationContainer
      theme={{
        ...LightTheme,
        fonts: { ...NavigationDefaultTheme.fonts },
      }}>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Package" component={PackageScreen} />
        <Stack.Screen name="Tag" component={TagScreen} />
        <Stack.Screen
          name="AddReview"
          component={AddReview}
          options={{
            headerTitle: 'Add Review',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
