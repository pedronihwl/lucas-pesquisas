import { useQuery } from '@tanstack/react-query';
import axiosClient from '../lib/axios';

interface GetHelloResponse {
  message?: string;
  [key: string]: any;
}

const getHello = async (): Promise<string> => {
  const { data } = await axiosClient.get<string | GetHelloResponse>('/');

  // Handle both string and object responses
  if (typeof data === 'string') {
    return data;
  }

  return data.message || JSON.stringify(data);
};

export const useGetHello = () => {
  return useQuery({
    queryKey: ['hello'],
    queryFn: getHello,
  });
};
