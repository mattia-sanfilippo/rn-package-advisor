import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { FlatList, View } from 'react-native';

type ReviewsListProps = {
  reviews: App.Review[];
};

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <FlatList
      contentContainerStyle={{ padding: 8 }}
      data={reviews}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem {...item} />}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
};
