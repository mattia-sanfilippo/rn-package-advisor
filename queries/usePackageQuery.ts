import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { Package } from 'screens/Package';
import {
  NPM_ENDPOINTS,
  NPM_REGISTRY_ENDPOINTS,
  npmApiClient,
  npmRegistryApiClient,
} from 'utils/axiosClient';
import { firebaseDb } from 'utils/firebaseConfig';

const fetchPackage = async ({ id, npmName }: Package) => {
  const dbResponse = await getDoc(doc(firebaseDb, 'packages', id));

  const npmResponse = await npmRegistryApiClient.get(NPM_REGISTRY_ENDPOINTS.PACKAGE(npmName));

  const npmDownloadsLastWeekResponse = await npmApiClient.get(
    NPM_ENDPOINTS.DOWNLOADS_LAST_WEEK(npmName)
  );
  const npmDownloadsLastMonthResponse = await npmApiClient.get(
    NPM_ENDPOINTS.DOWNLOADS_LAST_MONTH(npmName)
  );

  return {
    fbData: { id: dbResponse.id, ...dbResponse.data() },
    npm: npmResponse.data,
    downloads: {
      lastWeek: npmDownloadsLastWeekResponse.data.downloads,
      lastMonth: npmDownloadsLastMonthResponse.data.downloads,
    },
  };
};

export const usePackageQuery = (nPackage: Package) => {
  return useQuery({
    queryKey: ['package', nPackage.id],
    queryFn: () => fetchPackage(nPackage),
  });
};
