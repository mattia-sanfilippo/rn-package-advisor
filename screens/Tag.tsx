import { PackageItem } from 'components/PackageItem/PackageItem';
import { useSearchByTagQuery } from 'queries/useSearchByTagQuery';
import { FlatList } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

type TagScreenProps = {
  route: {
    params: {
      tag: string;
    };
  };
  navigation: any;
};

export const TagScreen = ({ route, navigation }: TagScreenProps) => {
  const { tag } = route.params;

  const { data, isLoading, error } = useSearchByTagQuery(tag);

  if (isLoading) {
    return <ActivityIndicator animating color="blue" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.package.name}
      renderItem={({ item }) => (
        <PackageItem
          name={item.package.name}
          description={item.package.description}
          rating={0}
          onPress={() =>
            navigation.navigate('Package', { nPackage: { npmName: item.package.name } })
          }
        />
      )}
    />
  );
};
