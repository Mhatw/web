import React from "react";
import styled, { useTheme } from "styled-components";
import { fonts } from "../../styles";

const StyledH2 = styled.h2`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.size};
  line-height: 3rem;
  color: ${(props) => props.color};
`;

export function Title(props) {
  const theme = useTheme().text;
  // text size
  const textSize = { sm: "2rem", md: "2.5rem", lg: "3rem" }[props.size || "md"];
  // text color
  const textColor = { primary: theme.primary, secondary: theme.secondary }[
    props.color || "primary"
  ];

  return (
    <StyledH2 size={textSize} color={textColor}>
      {props.text}
    </StyledH2>
  );
}
