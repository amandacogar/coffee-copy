import React from "react";
import "./styles/App.css";
import Home from "./components/home/home";
import Navigation from "./components/navigation";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Events from "./components/events/events";
import Merchandise from "./components/merchandise/merchandise";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Menu />
      <Events />
      <Merchandise />
      <Contact />
    </div>
  );
}

export default App;
