import React from "react";
import { Image, Button } from "react-bootstrap";
import bakery from "./bakery.jpg";
import coffee from "./coffee.jpg";
import wine from "./wine.jpg";
import wineMenu from "./WineMenu.pdf";
import coffeeMenu from "./CoffeeMenu.pdf";
import foodMenu from "./FoodMenu.pdf";

function Menu() {
  const openWine = (e) => {
    window.open(wineMenu);
  };
  const openFood = (e) => {
    window.open(foodMenu);
  };
  const openCoffee = (e) => {
    window.open(coffeeMenu);
  };
  return (
    <section className="section" id="menu">
      <div className="page-header">
        <h2 className="heading" id="menu-heading">
          On the Menu
        </h2>
      </div>
      <div id="menu-options">
        <div className="menu-link">
          <Image src={bakery} alt="" id="bakery" className="menu-image" />
          <Button className="circle" onClick={openFood}>
            eats
          </Button>
        </div>
        <div className="menu-link">
          <Image src={coffee} alt="" id="coffee" className="menu-image" />
          <Button className="circle" onClick={openCoffee}>
            coffee
          </Button>
        </div>
        <div className="menu-link">
          <Image src={wine} alt="" id="wine" className="menu-image" />
          <Button className="circle" onClick={openWine}>
            wine
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
