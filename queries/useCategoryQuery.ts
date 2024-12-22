import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firebaseDb } from 'utils/firebaseConfig';

const fetchCategory = async (categoryId: string) => {
  const response = await getDocs(
    query(collection(firebaseDb, 'packages'), where('categoryId', '==', categoryId))
  );

  return response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const useCategoryQuery = (categoryId: string) => {
  return useQuery({
    queryKey: ['category', categoryId],
    queryFn: () => fetchCategory(categoryId),
  });
};
