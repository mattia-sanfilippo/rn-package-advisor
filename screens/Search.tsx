import { PackageItem } from 'components/PackageItem/PackageItem';
import { useSearchQuery } from 'queries/useSearchQuery';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';

type SearchScreenProps = {
  navigation: any;
};

export default function SearchScreen({ navigation }: SearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const { data } = useSearchQuery(searchQuery);

  return (
    <FlatList
      ListHeaderComponent={
        <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
      }
      ListHeaderComponentStyle={{ padding: 16 }}
      data={data || []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PackageItem
          {...item.package}
          onPress={() =>
            navigation.navigate('Package', {
              nPackage: {
                npmName: item.package.name,
              },
            })
          }
        />
      )}
      ItemSeparatorComponent={Divider}
    />
  );
}
