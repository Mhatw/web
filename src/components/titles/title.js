import React from "react";
import styled from "styled-components";
import { fonts } from "../../styles";

const StyledH2 = styled.h2`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${(props) => props.theme.text.primary};
`;

export function TitleH2(props) {
  return <StyledH2>{props.text}</StyledH2>;
}
