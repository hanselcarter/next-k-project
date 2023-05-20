import { useBrewery } from "@/hooks/brewery";
import LoaderSpinner from "@/components/LoaderSpinner";

interface BreweryPageProps {
  breweryId: string;
}

import {
  GetStaticPropsResult,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";
import Description from "@/components/Description";

//I could have use useRouter but I wanted to do it the ssr way
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<BreweryPageProps>> {
  //For the sake of simplicity i know already this value exists it is only to satisfy typescript
  const breweryId = context?.params?.id
    ? (context.params.id as string)
    : "5128df48-79fc-4f0f-8b52-d06be54d0cec";

  return { props: { breweryId } };
}

export default function BreweryPage({ breweryId }: BreweryPageProps) {
  const { brewery, loading, error } = useBrewery(breweryId);

  console.log(brewery);

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        brewery && <Description brewery={brewery}></Description>
      )}
    </>
  );
}
