import { useState, useEffect, useRef } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const isMounted = useRef();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;

    async function init() {
      try {
        const response = await fetch(`${baseUrl}${url}`);

        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setData(json);
        } else {
          throw response;
        }
      } catch (error) {
        if (isMounted.current) setError(error);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }

    init();

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { data, error, loading };
}
