import { useQuery } from '@tanstack/react-query';
import { NPM_REGISTRY_ENDPOINTS, npmRegistryApiClient } from 'utils/axiosClient';

const searchByTag = async (tag: string) => {
  const response = await npmRegistryApiClient.get(NPM_REGISTRY_ENDPOINTS.SEARCH, {
    params: {
      text: `keywords:${tag}`,
    },
  });
  return response.data?.objects || [];
};

export const useSearchByTagQuery = (tag: string) => {
  return useQuery({ queryKey: ['searchByTag', tag], queryFn: () => searchByTag(tag) });
};
