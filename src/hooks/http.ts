import { useState, useCallback } from "react";

export const useHttp = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url: string, method = "GET", body = null, headers = {}) => {
      try {
        if (body) body = JSON.stringify(body);

        const response = await fetch(url, {
          method,
          body,
          headers,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error request");
        }

        setLoading(true);

        return data;
      } catch (e) {
        setLoading(true);
        setError(e.message);
        throw e;
      }
    },

    []
  );

  const cleanError = () => setError(null);

  return { isLoading, request, error, cleanError };
};
