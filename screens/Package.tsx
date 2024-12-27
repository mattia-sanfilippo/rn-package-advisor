import { npmLogo } from 'assets';
import { Keywords } from 'components/Keywords/Keywords';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { usePackageQuery } from 'queries/usePackageQuery';
import { useReviewsQuery } from 'queries/useReviewsQuery';
import { useCallback } from 'react';
import { Image, Linking, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Card, Headline, Text, Title } from 'react-native-paper';

export type Package = {
  id: string;
  name: string;
  npmName: string;
};

type PackageScreenProps = {
  route: { params: { nPackage: Package } };
  navigation: any;
};

export const PackageScreen = ({ route, navigation }: PackageScreenProps) => {
  const { nPackage } = route.params;
  const { data, isLoading, error } = usePackageQuery(nPackage);
  const {
    data: reviewsData,
    isLoading: reviewsIsLoading,
    error: reviewsError,
  } = useReviewsQuery(nPackage?.npmName);

  const openHomepage = useCallback(() => {
    if (!data || !data.npm.homepage) {
      return;
    }

    Linking.openURL(data.npm.homepage);
  }, [data]);

  const navigateToTag = useCallback(
    (tag: string) => {
      navigation.navigate('Tag', { tag });
    },
    [navigation]
  );

  const navigateToAddReview = useCallback(() => {
    navigation.navigate('AddReview', { id: nPackage.npmName });
  }, [navigation, nPackage]);

  if (isLoading || reviewsIsLoading) {
    return <ActivityIndicator animating color="blue" />;
  }

  if (error || !data || reviewsError) {
    return <Text>Error: {error?.message}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Card>
        <Card.Content>
          <View style={styles.titleCardContainer}>
            <View style={styles.headline}>
              <Image source={npmLogo} style={styles.npmLogo} />
              <View style={styles.npmTitleWrapper}>
                <Headline>{data.npm.name}</Headline>
                <Text>{data.npm.description}</Text>
              </View>
            </View>

            {data.npm.author && <Text>Author: {data.npm.author.name}</Text>}
            <View style={styles.buttonsContainer}>
              {data.npm.homepage && (
                <Button mode="contained" icon="mouse" buttonColor="#CC3534" onPress={openHomepage}>
                  Homepage
                </Button>
              )}
              {data.npm.repository && (
                <Button mode="contained" icon="github" buttonColor="black" onPress={openHomepage}>
                  Repository
                </Button>
              )}
            </View>
          </View>
        </Card.Content>
      </Card>
      <Headline>Version</Headline>
      <Text>{data.npm['dist-tags'].latest}</Text>
      <Headline>Downloads</Headline>
      <View style={styles.downloadsContainer}>
        <Card style={styles.downloadsCard}>
          <Card.Content>
            <Headline>{data.downloads.lastMonth}</Headline>
            <Title>Last month</Title>
          </Card.Content>
        </Card>
        <Card style={styles.downloadsCard}>
          <Card.Content>
            <Headline>{data.downloads.lastWeek}</Headline>
            <Title>Last week</Title>
          </Card.Content>
        </Card>
      </View>
      <Headline>Keywords</Headline>
      <Keywords keywords={data.npm.keywords} onPress={navigateToTag} />
      <Headline>Reviews</Headline>
      <Button mode="text" onPress={navigateToAddReview} icon="pencil">
        Write a review
      </Button>
      <View>
        <ReviewsList reviews={reviewsData || []} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  npmLogo: {
    width: 100,
    height: 100,
  },
  npmTitleWrapper: {
    flex: 1,
  },
  titleCardContainer: {
    gap: 16,
  },
  scrollViewContent: {
    padding: 16,
    gap: 16,
  },
  headline: {
    flexDirection: 'row',
    gap: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  downloadsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  downloadsCard: {
    flex: 1,
    alignItems: 'center',
  },
});
