import { View, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

type KeywordsProps = {
  keywords: string[];
  onPress?: (keyword: string) => void;
};

export const Keywords = ({ keywords, onPress }: KeywordsProps) => {
  return (
    <View style={styles.container}>
      {keywords.map((keyword) => (
        <Chip key={keyword} style={styles.chip} onPress={() => onPress?.(keyword)}>
          {keyword}
        </Chip>
      ))}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 4,
  },
});
