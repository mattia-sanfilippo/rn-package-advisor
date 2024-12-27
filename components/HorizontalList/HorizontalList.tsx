import { FlatList, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

type HorizontalListProps = {
  data: App.Category[] | App.Package[];
  type: 'Category' | 'Package';
  navigation: any;
};

export const HorizontalList = ({ data, type, navigation }: HorizontalListProps) => (
  <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => {
      return (
        <Card style={styles.card} onPress={() => navigation.navigate(type, { id: item.id })}>
          <Card.Content>
            <Title>{item.name}</Title>
          </Card.Content>
        </Card>
      );
    }}
  />
);

const styles = StyleSheet.create({
  card: {
    margin: 8,
  },
});
