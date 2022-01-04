import React from "react";
import { Image } from "react-bootstrap";
import image2 from "./about.jpg";

function About() {
  return (
    <>
      <section className="section" id="about">
        <div id="our-story">
          <h2 className="heading" id="about-heading">
            Our Story
          </h2>
          <p id="about-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper
            ultricies velit, non euismod turpis convallis auctor. Pellentesque
            sapien ante, hendrerit nec dictum nec, dictum ac lectus. Donec
            pretium nulla convallis orci eleifend, nec porttitor diam vehicula.
            Nulla nec tincidunt lorem. Nunc varius enim vel ullamcorper
            volutpat. Fusce tristique, ex at tristique rhoncus, magna velit
            maximus metus, id aliquet enim metus sed dui. Praesent et aliquet
            lacus.
          </p>
        </div>
        <Image src={image2} alt="" id="about-image" />
      </section>
    </>
  );
}

export default About;
