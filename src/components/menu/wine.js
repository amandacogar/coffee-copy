import React from "react";

function Wine() {
  return (
    <section className="section" id="wine-menu">
      <h1 className="heading" id="logo">
        Vintage Coffee &amp; Wine Bar
      </h1>
      <p className="menu-p">Hand Crafted, Original Specialties</p>
      <div className="category">
        <h2>White Wine</h2>
        <div className="menu-item">
          <p className="menu-item-description">
            Chateau Chalon, Dme Marie-Chevassu, Arbois, France 1999
          </p>
          <p className="item-price">14.00</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">
            Condrieu, La Petite Cote, Yves Culleiron, France 2014
          </p>
          <p className="item-price">18.00</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">
            Hirsch Vineyard, Chardonnay, Sonoma, California, USA 2013
          </p>
          <p className="item-price">29.00</p>
        </div>
      </div>
      <div className="category">
        <h2>Red Wine</h2>
        <div className="menu-item">
          <p className="menu-item-description">
            Chambolle Musigny, Fredric Magnien, France 2013
          </p>
          <p className="item-price">23.00</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">
            John Duval, Eligo Shiraz, Barossa, Australia 2012
          </p>
          <p className="item-price">29.00</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">
            Amarone della Valpolicella, Bertani, Veneto, Italy 2007
          </p>
          <p className="item-price">40.00</p>
        </div>
        <div className="menu-item">
          <p className="menu-item-description">
            Chateau d'Yquem, Sauternes, France 1998
          </p>
          <p className="item-price">58.00</p>
        </div>
      </div>
    </section>
  );
}

export default Wine;
