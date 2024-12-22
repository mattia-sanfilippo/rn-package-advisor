import { CategoryItem } from 'components/CategoryItem/CategoryItem';
import ScreenWrapper from 'components/ScreenWrapper';
import { useCategoriesQuery } from 'queries/useCategoriesQuery';
import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Divider, Text } from 'react-native-paper';

export default function CategoriesScreen({ navigation }) {
  const { data, isLoading, error } = useCategoriesQuery();

  console.log(data);

  const renderItem = useCallback(({ item }) => {
    return (
      <CategoryItem
        title={item.name}
        description=""
        icon="folder"
        onPress={() =>
          navigation.navigate('Category', {
            categoryId: item.id,
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
}
