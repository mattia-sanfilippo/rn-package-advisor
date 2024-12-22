import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { firebaseDb } from 'utils/firebaseConfig';

const fetchCategories = async () => {
  const response = await getDocs(collection(firebaseDb, 'categories'));

  return response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const useCategoriesQuery = () => {
  return useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
};
