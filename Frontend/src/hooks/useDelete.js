import { useCallback } from 'react';
import { useApi } from './useApi';

export function useDelete() {
  const { data, error, loading, request, reset } = useApi();

  const deleteResource = useCallback(async (url, config = {}) => {
    try {
      const response = await request({
        url,
        method: 'DELETE',
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
    loading: loading && !data, // Only show loading if no successful deletion yet
    deleteResource,
    reset,
    isDeleted: !!data
  };
}