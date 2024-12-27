import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { firebaseDb } from 'utils/firebaseConfig';

const fetchLatestReviews = async () => {
  const response = await getDocs(
    query(collection(firebaseDb, 'reviews'), orderBy('createdAt', 'desc'), limit(5))
  );
  return response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as App.Review;
  });
};

export const useLatestReviewsQuery = () => {
  return useQuery({ queryKey: ['latestReviews'], queryFn: fetchLatestReviews });
};
