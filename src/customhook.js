import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(url);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading };
};
