import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.scss";

const NavbarComponent = () => {
  const [scrollY, setScrolly] = useState(0);

  const [auth, setAuth] = useState(sessionStorage.getItem("auth") ?? false);

  window.onscroll = function () {
    var y = window.scrollY;
    setScrolly(y);
  };

  return (
    <>
      <Navbar
        className={scrollY > 10 && "navbar-custom"}
        id="navbar"
        fixed="top"
        expand="lg"
      >
        <Container className="justify-content-end">
          <Navbar.Toggle
            className="justify-content-end"
            id="hamb_button"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              {auth && <Nav.Link href="/admin/dashboard">ADMIN</Nav.Link>}
              <Nav.Link href="#container_about">NOSOTROS</Nav.Link>
              <Nav.Link href="#container_jobs">JOBS</Nav.Link>
              <Nav.Link href="#container_location">UBICACIÓN</Nav.Link>
              <Nav.Link href="#container_partner">SPONSORS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
