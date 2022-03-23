import React from "react";
import { Image } from "react-bootstrap";
import coffeecup from "./coffeecup.png";

function Coffee() {
  return (
    <section className="section" id="coffee-menu">
      <h1 className="heading" id="logo">
        Vintage Coffee &amp; Wine Bar
      </h1>
      <p className="menu-p">Hand Crafted, Original Specialties</p>
      <div className="coffee-category">
        <div className="menu-item">
          <p className="menu-item-description">Drip Coffee / Cold Brew</p>
          <p className="item-price">3.00</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">Americano</p>
          <p className="item-price">3.20</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">Latte</p>
          <p className="item-price">4.00</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">Strawberry Smoothie</p>
          <p className="item-price">5.00</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">
            Milk Substitutes (Oat Milk, Soy, Almond Milk)
          </p>
          <p className="item-price">0.50</p>
        </div>
      </div>
      <Image src={coffeecup} alt="coffee cup graphic" />
    </section>
  );
}

export default Coffee;
