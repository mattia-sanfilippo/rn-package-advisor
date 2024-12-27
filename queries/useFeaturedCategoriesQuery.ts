import { useQuery } from '@tanstack/react-query';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firebaseDb } from 'utils/firebaseConfig';

const fetchFeaturedCategories = async () => {
  const response = await getDocs(
    query(collection(firebaseDb, 'categories'), where('featured', '==', true))
  );

  return response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as App.Category;
  });
};

export const useFeaturedCategoriesQuery = () => {
  return useQuery({ queryKey: ['featuredCategories'], queryFn: fetchFeaturedCategories });
};
