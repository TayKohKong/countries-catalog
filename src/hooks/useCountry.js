import { useState, useEffect } from "react";
import { getAllCountry } from "../api/countryApi";
import { mapCountry } from "../utils/countryUtils";

const useGetCountries = () => {
  const [fetchedData, setFetchedData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    const data = await getAllCountry();
    const error = data[0].error
    if (!error) {
      const countries = data.map(mapCountry);
      setFetchedData(countries);
      setLoading(false);
    } else {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  return { fetchedData, loading, error };
};

export {
  useGetCountries
}
