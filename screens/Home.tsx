import { HorizontalList } from 'components/HorizontalList/HorizontalList';
import { ReviewsHorizontalList } from 'components/ReviewsHorizontalList/ReviewsHorizontalList';
import { useFeaturedCategoriesQuery } from 'queries/useFeaturedCategoriesQuery';
import { useFeaturedPackagesQuery } from 'queries/useFeaturedPackagesQuery';
import { useLatestReviewsQuery } from 'queries/useLatestReviewsQuery';
import { ScrollView } from 'react-native';
import { Headline } from 'react-native-paper';

type HomeScreenProps = {
  navigation: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { data: featuredCategories } = useFeaturedCategoriesQuery();
  const { data: featuredPackages } = useFeaturedPackagesQuery();
  const { data: latestReviews } = useLatestReviewsQuery();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Headline>Featured categories</Headline>
      {featuredCategories && (
        <HorizontalList type="Category" data={featuredCategories} navigation={navigation} />
      )}
      <Headline>Featured packages</Headline>
      {featuredPackages && (
        <HorizontalList type="Package" data={featuredPackages} navigation={navigation} />
      )}
      <Headline>Latest reviews</Headline>
      {latestReviews && <ReviewsHorizontalList data={latestReviews} />}
    </ScrollView>
  );
}
