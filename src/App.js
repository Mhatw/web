import "./App.css";
import React from "react";
import { Title } from "./components/titles";
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
        <Title text="Hello World" />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
