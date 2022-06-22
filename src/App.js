import "./App.css";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Outlet } from "react-router-dom";
import { LoaderAlt } from "@styled-icons/boxicons-regular";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.background.primary};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  text-align: left;
  background-color: #000;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }
  .loader__spinner {
    animation: spin 0.4s linear infinite;
    width: 2rem;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  background: linear-gradient(270deg, #0f0f0f, #000000);
  background-size: 400% 400%;

  animation: load 1.6s linear;

  @keyframes load {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

function App() {
  const localTheme = localStorage.getItem("mhatwTheme");
  console.log("current", localTheme);
  const [theme, setTheme] = React.useState(localTheme || "light");

  // get from local storage

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  function Loader() {
    return (
      <StyledDiv className="loader">
        <h2>Mhatw</h2>
        <div className="loader__spinner">
          <LoaderAlt />
        </div>
      </StyledDiv>
    );
  }
  const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1500);
  }, []);

  // [] means like componentDidMount

  // return !spinner && <div>Your content</div>;

  return spinner ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp className="App">
        {spinner ? (
          <Loader />
        ) : (
          <>
            <Nav />
            <Outlet />
            <Footer theme={theme} setTheme={setTheme} />
          </>
        )}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
