import Head from "next/head";
import Image from "next/image";

import { useBreweries } from "@/hooks/breweries";
import LoaderSpinner from "@/components/LoaderSpinner";

export default function Home() {
  const { breweries, loading } = useBreweries();

  return (
    <>
      <Head>
        <title>Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <LoaderSpinner /> : <h1>hello </h1>}
    </>
  );
}
