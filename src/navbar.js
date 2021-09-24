import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MIT xPro Banking App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/createaccount">
              Create Account
            </Nav.Link>
            <Nav.Link as={Link} to="/deposit">
              Deposit
            </Nav.Link>
            <Nav.Link as={Link} to="/withdraw">
              Withdraw
            </Nav.Link>
            <Nav.Link as={Link} to="/alldata">
              All Data
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
