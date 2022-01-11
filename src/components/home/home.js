import React from "react";
import landing from "./landing.avif";
import { Image } from "react-bootstrap";

function Home() {
  setTimeout(() => {
    document.querySelector("#home-heading").classList.add("change");
  }, 1000);
  return (
    <section className="section" id="home">
      <Image
        src={landing}
        alt="bar with shelves of wine and coffee related items on the wall"
        id="landing-img"
      />
      <h1 className="heading" id="home-heading">
        Vintage Coffee &amp; Wine Bar
      </h1>
    </section>
  );
}

export default Home;
