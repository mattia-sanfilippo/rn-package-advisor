import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { FlatList, View } from 'react-native';

type ReviewsListProps = {
  reviews: App.Review[];
  horizontal?: boolean;
};

export const ReviewsList = ({ reviews, horizontal }: ReviewsListProps) => {
  return (
    <FlatList
      contentContainerStyle={{ padding: 8 }}
      data={reviews}
      horizontal={horizontal}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem {...item} />}
      ItemSeparatorComponent={() => <View style={{ height: 16, width: 16 }} />}
    />
  );
};
