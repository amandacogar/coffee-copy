import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Wine from "./components/menu/wine";
import Eats from "./components/menu/eats";
import Coffee from "./components/menu/coffee";
import reportWebVitals from "./tests/reportWebVitals";
import "swiper/css/bundle";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/wine" element={<Wine />}></Route>
      <Route path="/eats" element={<Eats />}></Route>
      <Route path="/coffee" element={<Coffee />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
