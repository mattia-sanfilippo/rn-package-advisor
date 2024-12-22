import { List } from 'react-native-paper';

type CategoryItemProps = {
  title: string;
  description: string;
  icon: string;
};

export const CategoryItem = ({ title, description, icon }: CategoryItemProps) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={(props) => <List.Icon {...props} icon={icon} />}
    />
  );
};
