import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNav({
  theme = "dark",
  logoSrc = "/img/logo.svg",
  brandName = "Manage Product",
}) {
  return (
    <Navbar collapseOnSelect expand="lg" bg={theme} data-bs-theme={theme} fixed="top" sticky="top" >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logoSrc}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp;
          {brandName}
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products">Product</Nav.Link>
            <Nav.Link href="/404">No Page</Nav.Link>
            {/* <NavDropdown title="Dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
