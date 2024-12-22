import { List } from 'react-native-paper';

type CategoryItemProps = {
  title: string;
  description: string;
  icon: string;
  onPress?: () => void;
};

export const CategoryItem = ({ title, description, icon, onPress }: CategoryItemProps) => {
  return (
    <List.Item
      onPress={onPress}
      title={title}
      description={description}
      left={(props) => <List.Icon {...props} icon={icon} />}
    />
  );
};
