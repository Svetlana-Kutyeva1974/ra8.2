import { useEffect, useState } from 'react';

export default function useFetchRequest(url, opt= null) {
    const [data, setData] = useState(opt);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log('передали в fetch ---', url, opt);
    useEffect(() => {
      setLoading(true);
      const timerId = setTimeout(async () => {
        try {
          const response = await fetch(url);
          console.log('response----!!!!!fetch ---', response);
          if (!response.ok) {
            setError({ state: true, text: response.statusText });
          }    
          const dataJson = await response.json();
          //console.log('response2----!!!!!fetch ---', response);
          //console.log('data fetch ---\n', dataJson);
          setData(dataJson);
          setError(null);
          //setLoading(false);
          } catch (e) {
            console.error(e);
            setError({ state: true, text: e.message});
          } finally {
            setLoading(false);
          }
      }, 1000);
      return () => clearTimeout(timerId);
      },[url, opt]);

  console.log('return fetcha ---', data, loading, error);
  return [{data, loading, error}];
}