import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { fonts } from "../../styles";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.button.primary};
  color: ${(props) => props.theme.button.textPrimary};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.18rem;
  display: flex;
  align-items: center;
  ${(props) => (props.maxWidth ? "width: 100%;" : "width: auto;")};
`;

export function Button({ children, maxWidth, ...props }) {
  return (
    <StyledButton maxWidth={maxWidth} {...props}>
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
};
