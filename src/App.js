import "./App.css";
import React from "react";
import { Paragraph, Title } from "./components/text";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";

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
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
