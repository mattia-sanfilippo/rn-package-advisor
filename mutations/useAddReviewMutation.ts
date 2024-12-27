import { useMutation } from '@tanstack/react-query';
import { addDoc, collection } from 'firebase/firestore';
import { firebaseDb } from 'utils/firebaseConfig';
import { queryClient } from 'utils/queryClient';

const writeReview = async (review: { npmName: string; rating: number; description: string }) => {
  await addDoc(collection(firebaseDb, 'reviews'), review);
};

export const useAddReviewMutation = () => {
  return useMutation({
    mutationFn: (review: { npmName: string; rating: number; description: string }) =>
      writeReview(review),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['reviews', variables.npmName] });
    },
  });
};
