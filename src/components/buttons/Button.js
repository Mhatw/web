import React from "react";
import styled, { useTheme } from "styled-components";
import PropTypes from "prop-types";
import { fonts } from "../../styles";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.18rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${(props) => (props.maxWidth ? "width: 100%;" : "width: auto;")};
  background-color: ${(props) => props.color[0]};
  color: ${(props) => props.color[1]};
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.color[2]};
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%);
  }
`;

export function Button({ children, maxWidth, color, ...props }) {
  const theme = useTheme().button;
  const btnColor = {
    primary: [theme.primary, theme.textPrimary, theme.hoverPrimary],
    secondary: [theme.secondary, theme.textSecondary, theme.hoverSecondary],
    tertiary: [theme.tertiary, theme.textTertiary, theme.hoverTertiary],
    cuartiary: [theme.cuartiary, theme.textCuartiary, theme.hoverCuartiary],
  }[color];
  return (
    <StyledButton maxWidth={maxWidth} color={btnColor} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.bool,
};

Button.defaultProps = {
  children: "Button",
  maxWidth: false,
  color: "primary",
};
