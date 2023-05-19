import { useQuery } from "react-query";
import { fetchJson, ApiError } from "@/lib/api";

import { Brewery } from "../interfaces/interfaces";

const BREWERIES_QUERY_KEY = "breweries";

interface UseBreweries {
  error: boolean;
  loading: boolean;
  breweries: Brewery[];
}

export function useBreweries(): UseBreweries {
  const query = useQuery(
    BREWERIES_QUERY_KEY,
    async () => {
      try {
        return await fetchJson("https://api.openbrewerydb.org/v1/breweries");
      } catch (err) {
        return undefined;
      }
    },
    {
      staleTime: 30_000,
      cacheTime: Infinity,
    }
  );

  const breweriesData = query.data as Brewery[] | undefined;

  //Slicing things up, due to many data for the simplicity of the challenge

  return {
    breweries: breweriesData ? breweriesData.slice(0, 5) : [],
    loading: query.isLoading,
    error: query.isError,
  };
}
