import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menubar = ({ isLoggedIn, setisLoggedIn }) => {
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          vtechelite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Nav.Link
                as={Link}
                to="/login"
                onClick={() => {
                  logOut();
                }}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Menubar;
