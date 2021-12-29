import React from "react";
import { Image } from "react-bootstrap";
import image2 from "./about.jpg";

function About() {
  return (
    <>
      <section className="section" id="about">
        <Image src={image2} alt="" id="about-image" />
        <div id="our-story">
          <h2 className="heading" id="about-heading">
            Our Story
          </h2>
          <p id="about-paragraph">
            Seven dishes. Six drinks. That's what we started with. Our initial
            menu was lean but perfectly curated. Our offerings have grown a lot
            since then, but our commitment to perfection remains.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
