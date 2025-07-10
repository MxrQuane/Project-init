import { useCallback } from 'react';
import { useApi } from './useApi';

export function usePost() {
  const { data, error, loading, request } = useApi();

  const post = useCallback(async (url, postData, config = {}) => {
    return await request({
      url,
      method: 'POST',
      data: postData,
      ...config
    });
  }, [request]);

  return {
    data,
    error,
    loading,
    post
  };
}