import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

type StarsProps = {
  rating: number;
};

const STARS = 5;

export const Stars = ({ rating }: StarsProps) => {
  return (
    <View style={styles.container}>
      {[...Array(STARS)].map((_, index) => {
        if (index < rating) {
          return <MaterialCommunityIcons key={index} name="star" size={20} color="orange" />;
        }
        return <MaterialCommunityIcons key={index} name="star-outline" size={20} color="orange" />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
