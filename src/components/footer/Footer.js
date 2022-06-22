import styled from "styled-components";
import { Button } from "../buttons";
import { SvgContainer } from "../containers";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.background.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.5rem;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: auto;
    gap: 1rem;
    @media (max-width: 600px) {
      display: flex;
      justify-content: space-between;
      align-items: space-between;
      width: 100%;
      gap: 1rem;
    }
    button {
      padding: 1.65rem 1.65rem;
      font-size: 0.75rem;
      white-space: nowrap;
    }
    > div {
      background-color: ${(props) => props.theme.background.cuartiary};
      border-radius: 0.5rem;
      width: auto;
      padding: 1.25rem 0rem;

      div {
        margin: 0 1.5rem;
        gap: 0.5;
        align-items: space-evenly;
      }
    }
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.75rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.text.primary};
    span {
      font-weight: 700;
  }
`;

export function Footer({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("mhatwTheme", theme === "light" ? "dark" : "light");
  };

  return (
    <StyledFooter>
      <div>
        <Button onClick={toggleTheme}>
          {theme === "light" ? "dark" : "light"} theme
        </Button>
        <div>
          <SvgContainer></SvgContainer>
        </div>
      </div>
      <p>
        &copy; Copyright 2022 <span>&nbsp;Mhatw</span>
      </p>
    </StyledFooter>
  );
}
