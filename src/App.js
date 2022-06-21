import "./App.css";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import { Button } from "./components/buttons";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Outlet } from "react-router-dom";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.background.primary};
`;

function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(<Button onClick={toggleTheme}>Toggle Theme</Button>);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp className="App">
        <Nav />
        <Outlet />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
