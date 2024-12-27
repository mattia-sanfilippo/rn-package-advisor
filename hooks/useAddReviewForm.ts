import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { reviewSchema } from 'validation/review.schema';

export type AddReviewFormValues = {
  rating: number;
  body: string;
};

const defaultValues = {
  rating: 0,
  body: '',
};

export const useAddReviewForm = () => {
  return useForm<AddReviewFormValues>({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(reviewSchema),
  });
};
