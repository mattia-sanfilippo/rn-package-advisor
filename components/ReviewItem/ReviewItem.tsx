import { Stars } from 'components/Stars/Stars';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

type ReviewItemProps = App.Review;

export const ReviewItem = ({ description, rating }: ReviewItemProps) => {
  return (
    <Card>
      <Card.Content style={styles.container}>
        <Stars rating={rating} />
        <Text>{description}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
