import { useCallback } from 'react';
import { useApi } from './useApi';

export function usePatch() {
  const { data, error, loading, request, reset } = useApi();

  const patch = useCallback(async (url, patchData, config = {}) => {
    try {
      const response = await request({
        url,
        method: 'PATCH',
        data: patchData,
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
    patch,
    reset,
    isPatched: !!data
  };
}