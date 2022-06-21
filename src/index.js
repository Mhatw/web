import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App";
import { Title } from "./components/text";
import { HomeView } from "./view/home";
import { PortfolioView } from "./view/portfolio";
import { IndexCategories } from "./view/portfolio/Categories";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/portfolio" element={<PortfolioView />}>
          <Route index element={<IndexCategories />} />
          <Route path=":id" element={<Title>hola</Title>} />
        </Route>
        <Route path="/about" element={<Title>about</Title>} />
        <Route path="/contact" element={<Title>contact</Title>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
