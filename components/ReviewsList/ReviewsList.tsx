import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { FlatList } from 'react-native';

type ReviewsListProps = {
  reviews: App.Review[];
};

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem {...item} />}
    />
  );
};
