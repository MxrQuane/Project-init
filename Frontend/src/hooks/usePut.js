import { useCallback } from 'react';
import { useApi } from './useApi';

export function usePut() {
  const { data, error, loading, request, reset } = useApi();

  const put = useCallback(async (url, putData, config = {}) => {
    try {
      const response = await request({
        url,
        method: 'PUT',
        data: putData,
        ...config
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  }, [request]);

  return { 
    data,
    error,
    loading,
    put,
    reset,
    isUpdated: !!data
  };
}