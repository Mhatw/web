import React from "react";
import styled, { useTheme } from "styled-components";
import PropTypes from "prop-types";
import { fonts } from "../../styles";

const StyledParagraph = styled.p`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size};
  line-height: 1.8rem;
  color: ${(props) => props.color};
`;

export function Paragraph({ size, color, children, ...props }) {
  const theme = useTheme().text;
  // text size
  const textSize = {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
  }[size];

  // text color
  const textColor = {
    primary: theme.primary,
    secondary: theme.secondary,
  }[color];

  return (
    <StyledParagraph size={textSize} color={textColor} {...props}>
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};

Paragraph.defaultProps = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  size: "md",
  color: "primary",
};
