import { PackageItem } from 'components/PackageItem/PackageItem';
import ScreenWrapper from 'components/ScreenWrapper';
import { useCategoryQuery } from 'queries/useCategoryQuery';
import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Divider, Text } from 'react-native-paper';

type CategoryScreenProps = {
  navigation: any;
  route: { params: { categoryId: string } };
};

export const CategoryScreen = ({ navigation, route }: CategoryScreenProps) => {
  const { data, isLoading, error } = useCategoryQuery(route.params.categoryId || '');

  const renderItem = useCallback(({ item }) => {
    return (
      <PackageItem
        title={item.name}
        description={item.description}
        rating={4}
        onPress={() =>
          navigation.navigate('Package', {
            nPackage: {
              id: item.id,
              name: item.name,
              npmName: item.npmName,
            },
          })
        }
      />
    );
  }, []);

  if (isLoading) {
    return <ActivityIndicator animating color="blue" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <ScreenWrapper>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </ScreenWrapper>
  );
};
