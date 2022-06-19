import "./App.css";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import { Button } from "./components/buttons";
import { HomeView } from "./view/home";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.background.secondary};
`;

function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp className="App">
        <HomeView />
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
