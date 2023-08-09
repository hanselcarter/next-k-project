import Head from "next/head";
import { useBreweries } from "@/hooks/breweries";
import LoaderSpinner from "@/components/LoaderSpinner";
import List from "@/components/List";
import {
  StyledListContainerGrid,
  StyledInput,
  StyledHeadline,
} from "@/components/Styles";
import { useState } from "react";

export default function Home() {
  const { breweries, loading } = useBreweries();

  const [value, setValue] = useState("");

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const filteredBreweries = breweries.filter((brewery) => {
    return brewery.brewery_type.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <Head>
        <title>next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHeadline>Brewery types</StyledHeadline>
      <StyledInput
        type="search"
        value={value}
        onChange={onChangeInputValue}
        placeholder="Search for brewery types"
      />
      {loading ? (
        <LoaderSpinner />
      ) : (
        <StyledListContainerGrid>
          {filteredBreweries.map((brewery) => (
            <List key={brewery.id} brewery={brewery} />
          ))}
        </StyledListContainerGrid>
      )}
    </div>
  );
}
