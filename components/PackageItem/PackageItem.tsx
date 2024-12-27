import { Stars } from 'components/Stars/Stars';
import React, { useCallback } from 'react';
import { List } from 'react-native-paper';

type PackageItemProps = {
  name: string;
  description?: string;
  rating: number;
  hasRating?: boolean;
  onPress?: () => void;
};

export const PackageItem = ({
  name,
  description,
  rating,
  hasRating,
  onPress,
}: PackageItemProps) => {
  const renderRating = useCallback(() => {
    if (hasRating) {
      return <Stars rating={rating} />;
    }
  }, [hasRating, rating]);

  return (
    <List.Item onPress={onPress} title={name} description={description} right={renderRating} />
  );
};
