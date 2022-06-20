import styled from "styled-components";
import PropTypes from "prop-types";
import { fonts } from "../../styles";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  background-color: ${(props) => props.bgcolor};
  color: #000000;
  p {
    font-family: ${fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #000000;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export function Category({ name, bgcolor, ...props }) {
  return (
    <StyledDiv bgcolor={bgcolor} {...props}>
      <p>{name}</p>
    </StyledDiv>
  );
}

Category.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};

Category.defaultProps = {
  bgcolor: "#D9D9D9",
};
