import styled from "styled-components";

export const StyledOuterDiv = styled.div`
  width: 280px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const StyledCenteredText = styled.div`
  background-color: skyblue;
  color: white;
  text-align: center;
`;

export const StyledListContainerGrid = styled.div`
  display: grid;
  gap: 2;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledDescriptionOuterDiv = styled.div`
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
`;

export const StyledInput = styled.input`
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  width: 30%;
`;

export const StyledHeadline = styled.h1`
  color: #green;
  font-family: "Raleway", sans-serif;
  font-size: 62px;
  font-weight: 800;
  line-height: 72px;
  margin: 0 0 24px;

  text-transform: uppercase;
`;
