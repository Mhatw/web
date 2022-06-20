import React from "react";
import styled, { useTheme } from "styled-components";
import PropTypes from "prop-types";
import { fonts } from "../../styles";

const StyledH2 = styled.h2`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.size};
  line-height: 3rem;
  color: ${(props) => props.color};
`;

export function Title({ size, color, ...props }) {
  const theme = useTheme().text;
  // text size is set to 1.5rem by default
  const textSize = {
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
  }[size];

  // text color (defaults to theme color)
  const textColor = {
    primary: theme.primary,
    secondary: theme.secondary,
  }[color];

  console.log(textColor);
  return <StyledH2 size={textSize} color={textColor} {...props} />;
}

Title.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};

Title.defaultProps = {
  children: "Amazing Title",
  size: "md",
  color: "primary",
};
