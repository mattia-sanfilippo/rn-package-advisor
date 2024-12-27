import { Stars } from 'components/Stars/Stars';
import { Card, Text } from 'react-native-paper';

type ReviewItemProps = App.Review;

export const ReviewItem = ({ description, rating }: ReviewItemProps) => {
  return (
    <Card>
      <Card.Content>
        <Stars rating={rating} />
        <Text>{description}</Text>
      </Card.Content>
    </Card>
  );
};
