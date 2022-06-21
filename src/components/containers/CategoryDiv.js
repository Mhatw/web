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
  width: 49vw;
  background-color: ${(props) => props.bgcolor};
  color: #000000;
  transition: all 50ms linear 0.1s;
  &:hover {
    // box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%);

    svg {
      color: #838383;
    }
  }
  p {
    font-family: ${fonts.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #000000;
  }
  svg {
    width: 1.5rem;
    transition: all 100ms linear 0.1s;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export function CategoryDiv({ name, path, icon, bgcolor, ...props }) {
  return (
    <Link to={path}>
      <StyledDiv
        onClick={() => window.scrollTo(0, 0)}
        bgcolor={bgcolor}
        {...props}
      >
        {icon}
        <p>&nbsp;&nbsp;{name}</p>
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
