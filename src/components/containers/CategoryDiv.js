import styled from "styled-components";
import PropTypes from "prop-types";
import { fonts } from "../../styles";
import { Link } from "react-router-dom";

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

export function CategoryDiv({ name, path, bgcolor, ...props }) {
  return (
    <Link to={path}>
      <StyledDiv
        onClick={() => window.scrollTo(0, 0)}
        bgcolor={bgcolor}
        {...props}
      >
        <p>{name}</p>
      </StyledDiv>
    </Link>
  );
}

CategoryDiv.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};

CategoryDiv.defaultProps = {
  bgcolor: "#D9D9D9",
};
