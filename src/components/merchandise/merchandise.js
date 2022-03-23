import React, { useState } from "react";
import items from "./merchandise.json";
import MerchList from "./merch-list";

function Merchandise() {
  const [products, setProducts] = useState(items.items);
  return (
    <>
      <section className="section" id="merchandise">
        <div className="page-header">
          <h2 className="heading" id="merch-heading">
            Products
          </h2>
        </div>
        <div id="merch-body">
          {products.map((item, i) => (
            <MerchList data={item} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Merchandise;
