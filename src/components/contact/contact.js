import React from "react";
import { Image, Container, Button, Table } from "react-bootstrap";
import contactImg from "./contact.jpg";

function Contact() {
  return (
    <>
      <section className="section" id="contact">
        <div className="page-header">
          <h2 className="heading" id="contact-heading">
            Contact
          </h2>
        </div>
        <Container fluid id="contact-container">
          <div id="contact-info">
            <h3>
              Re-experience the classics,
              <br />7 days a week
            </h3>
            <Table borderless id="hours">
              <tbody>
                <tr>
                  <td className="day">Monday - Thursday:</td>
                  <td className="time">6:00am - 6:00pm</td>
                </tr>
                <tr>
                  <td className="day">Friday:</td>
                  <td className="time">6:00am - 8:00pm</td>
                </tr>
                <tr>
                  <td className="day">Saturday:</td>
                  <td className="time">7:00am - 10:00pm</td>
                </tr>
                <tr>
                  <td className="day">Sunday:</td>
                  <td className="time">7:00am - 5:00pm</td>
                </tr>
              </tbody>
            </Table>
            <p>
              <i class="fas fa-map-pin"></i>
              <a href="https://google.maps.com">
                123 Easy St, Maple Valley, WA 98038
              </a>
            </p>
            <p>
              <i class="fas fa-phone"></i> (555) 555-5555
            </p>
            <Button id="email">
              <a href="mailto:example@email.com">Send email</a>
            </Button>
            <div className="icons">
              <a href="https://www.instagram.com">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.yelp.com">
                <i class="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          <Image
            src={contactImg}
            alt="victorian women talking on the phone, reading, and cleaning their guns"
            id="contact-image"
          />
        </Container>
      </section>
    </>
  );
}

export default Contact;
