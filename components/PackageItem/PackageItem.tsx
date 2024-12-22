import { Stars } from 'components/Stars/Stars';
import React from 'react';
import { List } from 'react-native-paper';

type PackageItemProps = {
  title: string;
  description: string;
  rating: number;
  onPress?: () => void;
};

export const PackageItem = ({ title, description, rating, onPress }: PackageItemProps) => {
  return (
    <List.Item
      onPress={onPress}
      title={title}
      description="Hello world text text text text text"
      right={() => <Stars rating={rating} />}
    />
  );
};
