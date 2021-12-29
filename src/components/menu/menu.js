import React from "react";
import { Image, Button } from "react-bootstrap";
import bakery from "./bakery.png";
import coffee from "./coffee.jpg";
import wine from "./wine.jpg";
import menu from "./menu.pdf";
function Menu() {
  const openMenu = (e) => {
    window.open(menu);
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
          <Button className="circle" onClick={openMenu}>
            eats
          </Button>
        </div>
        <div className="menu-link">
          <Image src={coffee} alt="" id="coffee" className="menu-image" />
          <Button className="circle" onClick={openMenu}>
            coffee
          </Button>
        </div>
        <div className="menu-link">
          <Image src={wine} alt="" id="wine" className="menu-image" />
          <Button className="circle" onClick={openMenu}>
            wine
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
