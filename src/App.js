import "./App.css";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import { Button } from "./components/buttons";
import { HomeView } from "./view/home";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  position: relative;
  // height: 200vh;
`;

function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp className="App">
        <Nav />
        <HomeView />
        <Button onClick={toggleTheme}>Toggle Theme</Button>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
