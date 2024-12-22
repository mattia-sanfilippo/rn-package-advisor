import { npmLogo } from 'assets';
import { usePackageQuery } from 'queries/usePackageQuery';
import { useCallback } from 'react';
import { Image, Linking, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Card, Headline, Text, Title } from 'react-native-paper';

export type Package = {
  id: string;
  name: string;
  npmName: string;
};

type NpmPackage = {
  author: {
    name: string;
  };
  description: string;
  homepage: string;
  keywords: string[];
  license: string;
  maintaners: {
    name: string;
    email: string;
  }[];
  name: string;
  readme: string;
  readmeFilename: string;
  repository: {
    type: string;
    url: string;
  };
  'dist-tags': {
    latest: string;
    beta: string;
    next: string;
  };
};

type PackageScreenProps = {
  route: { params: { nPackage: Package } };
};

export const PackageScreen = ({ route }: PackageScreenProps) => {
  const { nPackage } = route.params;
  const { data, isLoading, error } = usePackageQuery(nPackage);

  const openHomepage = useCallback(() => {
    if (!data || !data.npm.homepage) {
      return;
    }

    Linking.openURL(data.npm.homepage);
  }, [data]);

  if (isLoading) {
    return <ActivityIndicator animating color="blue" />;
  }

  if (error || !data) {
    return <Text>Error: {error?.message}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Card>
        <Card.Content>
          <View style={styles.titleCardContainer}>
            <View style={styles.headline}>
              <Image source={npmLogo} style={{ width: 100, height: 100 }} />
              <View style={{ flex: 1 }}>
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
      <Headline>Downloads</Headline>
      <View style={styles.downloadsContainer}>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Card.Content>
            <Headline>{data.downloads.lastMonth}</Headline>
            <Title>Last month</Title>
          </Card.Content>
        </Card>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Card.Content>
            <Headline>{data.downloads.lastWeek}</Headline>
            <Title>Last week</Title>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleCardContainer: {
    gap: 16,
  },
  scrollViewContent: {
    padding: 16,
    flex: 1,
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
});
