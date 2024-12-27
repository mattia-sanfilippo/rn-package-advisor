import { RatingInput } from 'components/RatingInput/RatingInput';
import { AddReviewFormValues, useAddReviewForm } from 'hooks/useAddReviewForm';
import { useAddReviewMutation } from 'mutations/useAddReviewMutation';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';

type AddReviewProps = {
  navigation: any;
  route: any;
};

export const AddReview = ({ navigation, route }: AddReviewProps) => {
  const { id } = route.params;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useAddReviewForm();

  const { mutate } = useAddReviewMutation();

  const onSubmit = (data: AddReviewFormValues) => {
    mutate(
      {
        npmName: id,
        description: data.body,
        rating: data.rating,
      },
      {
        onSuccess: () => {
          navigation.goBack();
        },
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Controller
        control={control}
        name="rating"
        render={({ field: { onChange, value } }) => (
          <RatingInput value={value} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="body"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            multiline
            label="Review"
            numberOfLines={4}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            mode="outlined"
            error={!!errors.body}
          />
        )}
      />
      <HelperText type="error" visible={errors?.body !== undefined}>
        {errors?.body?.message}
      </HelperText>
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 16,
    gap: 16,
  },
});
