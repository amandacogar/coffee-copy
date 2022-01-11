import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  const [show, setShow] = useState(false);
  const handleClose = () =>
    setTimeout(() => {
      setShow(false);
    }, 2750);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="black" expand={false} variant="dark" sticky="top">
        <Container fluid id="nav-container">
          <Navbar.Toggle onClick={handleShow} id="toggle" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header id="close" closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav id="nav" className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to="home"
                  className="link"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  onClick={handleClose}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="about"
                  className="link"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  onClick={handleClose}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="menu"
                  className="link"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  onClick={handleClose}
                >
                  Menus
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="events"
                  className="link"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  onClick={handleClose}
                >
                  Events
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="merchandise"
                  className="link"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  onClick={handleClose}
                >
                  Products
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="contact"
                  className="link"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  onClick={handleClose}
                >
                  Contact
                </Nav.Link>
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
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
