import Head from "next/head";
import { useBreweries } from "@/hooks/breweries";
import LoaderSpinner from "@/components/LoaderSpinner";
import List from "@/components/List";
import { StyledListContainerGrid } from "@/components/Styles";

export default function Home() {
  const { breweries, loading } = useBreweries();

  return (
    <div>
      <Head>
        <title>Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Brewery types</h1>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <StyledListContainerGrid>
          {breweries.map((brewery) => (
            <List key={brewery.id} brewery={brewery} />
          ))}
        </StyledListContainerGrid>
      )}
    </div>
  );
}
