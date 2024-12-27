import { number, object, string } from 'zod';

export const reviewSchema = object({
  rating: number()
    .int()
    .min(1, {
      message: 'Rating must be between 1 and 5',
    })
    .max(5, {
      message: 'Rating must be between 1 and 5',
    }),
  body: string()
    .min(1, {
      message: 'Review body is required',
    })
    .max(1000, {
      message: 'Review must be between 1 and 1000 characters',
    }),
});
