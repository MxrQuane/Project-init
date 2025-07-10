import { useEffect } from 'react';
import { useApi } from './useApi';

export function useGet(url, config = {}) {
  const { data, error, loading, request, cancelRequest } = useApi();

  useEffect(() => {
    request({ 
      url,
      method: 'GET',
      ...config
    });

    return () => {
      cancelRequest();
    };
  }, [url, request, cancelRequest, config]);

  return {
    data,
    error,
    loading,
    refetch:
    request
  };
}