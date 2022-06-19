import "./App.css";
import React from "react";
import { Paragraph, Title } from "./components/text";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import { Button } from "./components/buttons";

function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <Title size="md" color="primary">
          FullStack Dev.
          <br />
          Designer.
          <br />
          Disrupter.
        </Title>
        <Paragraph size="md">
          Hi! I’m Cristian, FullStack developer and designer looking for new
          adventures
        </Paragraph>
        <Button maxWidth={true} onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
