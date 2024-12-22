import { useQuery } from '@tanstack/react-query';
import { axiosClient, ENDPOINTS } from 'utils/axiosClient';

const getSearchResults = async (text: string) => {
  const response = await axiosClient.get(ENDPOINTS.SEARCH, {
    params: {
      text,
    },
  });
  return response.data;
};

export const useSearchQuery = (text: string) => {
  return useQuery({ queryKey: ['search', text], queryFn: () => getSearchResults(text) });
};
