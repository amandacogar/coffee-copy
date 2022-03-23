import React from "react";
import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import bakery from "./bakery.jpg";
import coffee from "./coffee.jpg";
import wine from "./wine.jpg";

function Menu() {
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
          <Button as={Link} className="circle" to="/eats">
            eats
          </Button>
        </div>
        <div className="menu-link">
          <Image src={coffee} alt="" id="coffee" className="menu-image" />
          <Button as={Link} className="circle" to="/coffee">
            coffee
          </Button>
        </div>
        <div className="menu-link">
          <Image src={wine} alt="" id="wine" className="menu-image" />
          <Button as={Link} className="circle" to="/wine">
            wine
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
