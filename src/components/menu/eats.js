import React from "react";
import { Image } from "react-bootstrap";
import coffeeshopdesign from "./CoffeeShopDesign.png";

function Eats() {
  return (
    <section className="section" id="eats-menu">
      <h1 className="heading" id="logo">
        Vintage Coffee &amp; Wine Bar
      </h1>
      <p className="menu-p">Hand Crafted, Original Specialties</p>
      <div id="eats-menu-body">
        <Image
          src={coffeeshopdesign}
          alt="wine and grapes drawing"
          id="menu-photo"
        />
        <div>
          <div className="eats-category">
            <h2>Appetizers</h2>
            <div className="menu-item">
              <p className="menu-item-description">
                Warm Spiced Olives lemon | chili pepppers
              </p>
              <p className="item-price">14.00</p>
            </div>
            <div className="menu-item">
              <p className="menu-item-description">
                House-Made Hummus cucumber | olive oil | naan bread | chipotle
              </p>
              <p className="item-price">18.00</p>
            </div>
            <div className="menu-item">
              <p className="menu-item-description">
                House-Made Meatballs triple cheese polenta | tomato sauce
              </p>
              <p className="item-price">15.00</p>
            </div>
          </div>
          <div className="eats-category">
            <h2>Plates</h2>
            <div className="menu-item">
              <p className="menu-item-description">
                Bell &amp; Evans Chicken Breast | Spring Vegetables
              </p>
              <p className="item-price">23.00</p>
            </div>
            <div className="menu-item">
              <p className="menu-item-description">
                Santa Carota Short Ribs | red potato mash
              </p>
              <p className="item-price">29.00</p>
            </div>
            <div className="menu-item">
              <p className="menu-item-description">
                Sea Bass | cannellini bean ragout | vegetables
              </p>
              <p className="item-price">40.00</p>
            </div>
            <div className="menu-item">
              <p className="menu-item-description">
                Skirt Steak | roasted potates | vegetables
              </p>
              <p className="item-price">58.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eats;
