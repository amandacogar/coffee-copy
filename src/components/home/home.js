import React from "react";
import landing from "./landing.png";
import { Image } from "react-bootstrap";

function Home() {
  setTimeout(() => {
    document.querySelector("#home-heading").classList.add("change");
  }, 1000);
  return (
    <section className="section" id="home">
      <Image src={landing} alt="" id="landing-img" />
      <h1 className="heading" id="home-heading">
        Vintage Coffee &amp; Wine Bar
      </h1>
    </section>
  );
}

export default Home;
