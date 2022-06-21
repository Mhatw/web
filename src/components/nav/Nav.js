import { Menu, X } from "@styled-icons/boxicons-regular";
import { Comment } from "@styled-icons/boxicons-solid";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../buttons";
import { Logo } from "../text";
import { Links } from "./Links";

const StyledNav = styled.nav`
  position: fixed;
  right: 2.25rem;
  background-color: ${(props) => props.theme.background.secondary};
  z-index: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  // border: 1px solid red;

  svg {
    width: 2.5rem;
    padding: 0.25rem;
    color: ${(props) => props.theme.svg.primary};
  }
  button {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: 1rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    svg {
      width: 1.2rem;
      padding: 0;
      color: ${(props) => props.theme.svg.hoverPrimary};
    }
  }
`;
const StyledDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2.25rem 2.25rem 0 2.25rem;
  width: 100%;
`;

const StyledNavOpen = styled.nav`
  position: fixed;
  top: 1.25rem;
  right: 2.25rem;
  background-color: ${(props) => props.theme.background.secondary};
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  // border: 1px solid red;

  svg {
    width: 2.5rem;
    padding: 0.25rem;
    color: ${(props) => props.theme.svg.primary};
  }
`;
const StyledDivOpen = styled.div`
  display: flex;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  right: 0;
  top: 0;
  overflow-y: hidden;
  overflow: auto;
  background-color: ${(props) => props.theme.background.secondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2.25rem;
  width: 100vw;
  height: 100vh;
`;

export function Nav() {
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const NavOpen = (
    <StyledDivOpen>
      <StyledNavOpen>
        <X onClick={toggleNav} />
      </StyledNavOpen>
      <Links toggleNav={toggleNav} />
    </StyledDivOpen>
  );
  const NavClosed = (
    <StyledDiv>
      <Logo />
      <StyledNav>
        <NavLink to="/contact">
          <Button>
            <Comment />
            <p>contact me</p>
          </Button>
        </NavLink>
        <Menu onClick={toggleNav} />
      </StyledNav>
    </StyledDiv>
  );
  return isNavOpen ? NavClosed : NavOpen;
}
