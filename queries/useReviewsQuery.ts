import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firebaseDb } from 'utils/firebaseConfig';

const fetchReviews = async (npmName: string): Promise<App.Review[]> => {
  const response = await getDocs(
    query(collection(firebaseDb, 'reviews'), where('npmName', '==', npmName))
  );

  return response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as App.Review;
  });
};

export const useReviewsQuery = (npmName: string) => {
  return useQuery({
    queryKey: ['reviews', npmName],
    queryFn: () => fetchReviews(npmName),
    enabled: !!npmName,
  });
};
