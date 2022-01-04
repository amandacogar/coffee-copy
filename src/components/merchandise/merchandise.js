import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MerchList from "./merch-list.js";
import items from "./merchandise.json";

function Merchandise() {
  const [data, setData] = useState(items.items);
  return (
    <>
      <section className="section" id="merchandise">
        <div className="page-header">
          <h2 className="heading" id="merch-heading">
            Products
          </h2>
        </div>
        <div id="merch-body">
          {data.map((item, i) => (
            <MerchList data={item} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Merchandise;
