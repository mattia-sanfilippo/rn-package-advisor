import { useQuery } from '@tanstack/react-query';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firebaseDb } from 'utils/firebaseConfig';

const fetchFeaturedPackages = async () => {
  const response = await getDocs(
    query(collection(firebaseDb, 'packages'), where('featured', '==', true))
  );

  return response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as App.Package;
  });
};

export const useFeaturedPackagesQuery = () => {
  return useQuery({ queryKey: ['featuredPackages'], queryFn: fetchFeaturedPackages });
};
