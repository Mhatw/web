import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    color: ${(props) => props.theme.text.primary};
    font-size: 36px;
    line-height: 44px;
    // border: 1px solid blue;
  }
`;

export function Links({ toggleNav }) {
  console.log(toggleNav);
  const routes = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <StyledUl>
      {routes.map((route) => (
        <li key={route.name}>
          <NavLink
            onClick={toggleNav}
            style={({ isActive }) => {
              return { color: isActive ? "#bababa" : "" };
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
