import { Brewery } from "../interfaces/interfaces";
import { StyledDescriptionOuterDiv, StyledCenteredText } from "./Styles";
import Link from "next/link";

export interface DescriptionProps {
  brewery: Brewery;
}
export const Description = ({ brewery }: DescriptionProps) => {
  return (
    <StyledDescriptionOuterDiv>
      <StyledCenteredText>
        These are all the Brewery properties for {brewery.brewery_type}
      </StyledCenteredText>
      <div>Brewery type: {brewery.brewery_type}</div>
      <div>Brewery street: {brewery.street}</div>
      <div>Brewery city: {brewery.city}</div>
      <div>Brewery country: {brewery.country}</div>
      <Link
        href={`${brewery.website_url}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Brewery website: {brewery.website_url}
      </Link>
    </StyledDescriptionOuterDiv>
  );
};

export default Description;
