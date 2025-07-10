import { useState, useCallback, useRef } from 'react';
import api from '@/api/axios';

export function useApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef(new AbortController());

  const cancelRequest = useCallback(() => {
    controllerRef.current.abort();
    setLoading(false);
  }, []);

  const request = useCallback(async (config) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.request({
        ...config,
        signal: controllerRef.current.signal
      });
      setData(response.data);
      return response;
    } catch (err) {
      if (!api.isCancel(err)) {
        setError(err.response?.data || err.message);
      }
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
    cancelRequest
  };
}