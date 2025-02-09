import { useQuery } from '@tanstack/react-query';
import { NPM_REGISTRY_ENDPOINTS, npmRegistryApiClient } from 'utils/axiosClient';

const getSearchResults = async (text: string) => {
  const response = await npmRegistryApiClient.get(NPM_REGISTRY_ENDPOINTS.SEARCH, {
    params: {
      text,
    },
  });
  return response.data?.objects || [];
};

export const useSearchQuery = (text: string) => {
  return useQuery({
    queryKey: ['search', text],
    queryFn: () => getSearchResults(text),
    enabled: text.length > 3,
  });
};
