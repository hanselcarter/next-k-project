import { useQuery } from "react-query";
import { fetchJson } from "@/lib/api";

import { Brewery } from "../interfaces/interfaces";

const BREWERY_QUERY_KEY = "Brewery";

interface UseBrewery {
  error: boolean;
  loading: boolean;
  brewery: Brewery | undefined;
}

export function useBrewery(breweryId: string): UseBrewery {
  const query = useQuery(
    BREWERY_QUERY_KEY,
    async () => {
      try {
        return await fetchJson(
          `https://api.openbrewerydb.org/v1/breweries/${breweryId}`
        );
      } catch (err) {
        return undefined;
      }
    },
    {
      staleTime: 30_000,
      cacheTime: Infinity,
    }
  );

  const brewery = query.data as Brewery | undefined;

  return {
    brewery,
    loading: query.isLoading,
    error: query.isError,
  };
}
