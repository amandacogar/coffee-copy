import React from "react";
import { Image } from "react-bootstrap";

function MerchList({ data }) {
  return (
    <>
      <div className="item">
        <Image src={data.image} className="item-image" />
        <h3 className="item-title">{data.title}</h3>
        <p className="item-description">{data.description}</p>
        <p className="item-price">{data.price}</p>
      </div>
    </>
  );
}

export default MerchList;
