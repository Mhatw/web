import { NavLink } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { fonts } from "../../styles";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  li {
    font-family: ${fonts.primary};
    font-style: normal;
    font-weight: 900;
    color: ${(props) => props.theme.text.primary};
    font-size: 36px;
    line-height: 44px;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.button.hoverPrimary};
    }
  }
`;

export function Links({ toggleNav }) {
  const theme = useTheme();
  const routes = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  function handleClick() {
    toggleNav();
    window.scrollTo(0, 0);
  }
  return (
    <StyledUl>
      {routes.map((route) => (
        <li key={route.name}>
          <NavLink
            onClick={handleClick}
            style={({ isActive }) => {
              return { color: isActive ? theme.text.secondary : "" };
            }}
            to={route.path}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </StyledUl>
  );
}
