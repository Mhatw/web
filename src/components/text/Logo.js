import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts } from "../../styles";

const StyledLogo = styled.h1`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.text.primary};
`;

export function Logo({ ...props }) {
  return (
    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
      <StyledLogo {...props}>Mhatw</StyledLogo>
    </Link>
  );
}
