import { useEffect, useState } from "react";
import axios from "axios";
import { DataType } from "../types";

const useData = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState<boolean>();

  const getListData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getListData();
  }, []);

  return { data, loading };
};

export default useData;
