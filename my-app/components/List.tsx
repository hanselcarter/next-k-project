import { Brewery } from "../interfaces/interfaces";
import { StyledCenteredText, StyledOuterDiv } from "./Styles";
import Link from "next/link";

export interface ListProps {
  brewery: Brewery;
}
export const List = ({ brewery }: ListProps) => {
  return (
    <StyledOuterDiv>
      <StyledCenteredText>
        Brewery type: {brewery.brewery_type}
      </StyledCenteredText>
      <StyledCenteredText>Brewery Name: {brewery.name}</StyledCenteredText>
      <Link
        href={`/brewery/${brewery.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          {`This awesome brewery is located at ${brewery.street}, click here to know every detail about this brewery`}
        </div>
      </Link>
    </StyledOuterDiv>
  );
};

export default List;
